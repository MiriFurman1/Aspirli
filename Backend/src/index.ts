// import express, { Express, Request, Response, NextFunction } from 'express';
// import cors from 'cors';
// import connectToMongoDB from './config/db';
// // import routes from './routes/routes';
// import dotenv from 'dotenv';
// import errorHandler from './middleware/errorHandler'

// dotenv.config();

// const app: Express = express();
// const PORT: number = Number(process.env.PORT) || 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// connectToMongoDB();

// app.use(cors()); 
// // app.use(routes);


// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
// import helmet from 'helmet'
import errorHandler from './middleware/errorHandler'
import connectToMongoDB from './config/db';
dotenv.config()


const app = express(); 


// app.use(helmet()); 
app.use(cors()); 
app.use(express.json())
connectToMongoDB();

app.use(errorHandler);
const PORT = process.env.PORT || 3000


app.listen(PORT, async () => {
   console.log(`listning on port ${PORT}`)
})
module.exports = app
