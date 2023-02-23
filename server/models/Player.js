const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema({
  ingamehandle: {
    type: String,
    required: true,
  },
  
});

const Player = model('Player', PlayerSchema);

module.exports = Player;
