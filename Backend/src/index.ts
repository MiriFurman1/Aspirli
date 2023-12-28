import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
// import helmet from 'helmet';
import errorHandler from './middleware/errorHandler';
import connectToMongoDB from './config/db';
import verifyJWT from './middleware/verifyJWT';
import cookieParser from 'cookie-parser'
const PORT = process.env.PORT || 3000;

import { logger } from './middleware/logEvents';
import rootRoutes from './routes/root';
import registerRoutes from './routes/register';
import authRoutes from './routes/auth';
import usersRoutes from './routes/users'
import refreshRoutes from './routes/refresh'
import logoutRoutes from './routes/logout'
import credentials from './middleware/credentials';
import corsOptions from './config/corsOptions';

dotenv.config();

const app = express();
app.use(logger);
app.use(credentials)
// app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())

app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '/public')));

connectToMongoDB()
  .then(() => {
    // usersDB.setUsers();
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// routes
app.use('/', rootRoutes);
app.use('/register', registerRoutes);
app.use('/auth', authRoutes);
app.use('/refresh', refreshRoutes)
app.use('/logout',logoutRoutes)

//routes that need auth
app.use(verifyJWT);
app.use('/users', usersRoutes)

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
