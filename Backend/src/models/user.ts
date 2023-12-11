const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// // Hash the password before saving
// userSchema.pre('save', async function (next) {
//   const user = this;

//   if (user.isModified('password') || user.isNew) {
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     user.password = hashedPassword;
//   }

//   next();
// });

const User = mongoose.model('User', userSchema);

export default User;
