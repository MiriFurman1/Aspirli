const mongoose = require('mongoose');


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
  refreshToken:{
    type:String
  },
  roles: {
    type:Object, 

},
});



const User = mongoose.model('User', userSchema);

export default User;
