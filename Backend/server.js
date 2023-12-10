const express = require('express');
const session = require('express-session');
const passport = require('passport');
const connectToMongoDB = require('./config/db.js');
const configurePassport = require('./config/passport.js');
const routes = require('./routes/routes.js');
const cors=require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

connectToMongoDB();
configurePassport();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});