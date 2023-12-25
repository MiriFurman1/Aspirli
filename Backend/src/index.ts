import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
// import helmet from 'helmet';
import errorHandler from './middleware/errorHandler';
import connectToMongoDB from './config/db';
// import usersDB from './controllers/registerController';
const { logger } = require('./middleware/logEvents');
import rootRoutes from './routes/root';
import registerRoutes from './routes/register';
import authRoutes from './routes/auth';
import usersRoutes from './routes/users'

dotenv.config();

const app = express();

// app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
