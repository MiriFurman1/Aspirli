import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Home Page');
// });

// router.get('/register', (req, res) => {
//   res.sendFile(__dirname + '/views/register.html');
// });

// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ username });

//     if (existingUser) {
//       return res.status(400).send('Username already exists.');
//     }

//     const newUser = new User({ username, password });
//     await newUser.save();

//     res.send('Registration successful! You can now <a href="/login">login</a>.');
//   } catch (error) {
//     res.status(500).send('Internal Server Error');
//   }
// });

// router.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/views/login.html');
// });

// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       // Authentication failed, provide an error message
//       return res.send('Incorrect username or password.');
//     }

//     // Authentication successful, redirect to the dashboard
//     req.logIn(user, (err) => {
//       if (err) {
//         return next(err);
//       }
//       return res.redirect('/dashboard');
//     });
//   })(req, res, next);
// });

// router.get('/dashboard', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.send('Dashboard Page');
//   } else {
//     res.redirect('/login');
//   }
// });

module.exports = router;