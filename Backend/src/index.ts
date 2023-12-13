

import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
// import helmet from 'helmet'
import errorHandler from './middleware/errorHandler'
import connectToMongoDB from './config/db';
// import usersDB from './controllers/registerController'
dotenv.config()


const app = express(); 


// app.use(helmet()); 
app.use(cors()); 
app.use(express.json())
connectToMongoDB()
  .then(() => {
    // usersDB.setUsers();
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

app.use(errorHandler);
const PORT = process.env.PORT || 3000


app.listen(PORT, async () => {
   console.log(`listening on port ${PORT}`)
})
module.exports = app
