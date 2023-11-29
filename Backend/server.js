// server.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Import the User model
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



mongoose.connect(process.env.MONGODB_URI, )
  .then(() => {
    console.log('Connected to MongoDB');
    // Additional setup or starting your server goes here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Registration Route
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).send('Username already exists.');
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.send('Registration successful! You can now <a href="/login">login</a>.');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Login Route
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
  });
  
  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        // Authentication failed, provide an error message
        return res.send('Incorrect username or password.');
      }
  
      // Authentication successful, redirect to the dashboard
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.redirect('/dashboard');
      });
    })(req, res, next);
  });

app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Dashboard Page');
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
