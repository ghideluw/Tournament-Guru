const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema({
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

const Player = model('Player', PlayerSchema);

module.exports = Player;
