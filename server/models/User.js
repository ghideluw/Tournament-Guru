const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  username: {
    type: Number,
    default: 0,
  },
});

const User = model('User', UserSchema);

module.exports = User;
