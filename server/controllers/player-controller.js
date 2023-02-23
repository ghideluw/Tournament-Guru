const { Player } = require('../models');


    module.exports = {
    // Create Player
    async createPlayer({ body }, res) {
        const player = await Player.create(body);
    
        if (!player) {
          return res.status(400).json({ message: 'Unable to create player' });
        }
    
        res.status(200).json(player);
      },

    },
        async this.getAllPlayers ({req}, res) {
            await Player.find()
                .sort({_id: -1})
                .select('-__v')
                .then((allPlayers) => res.json(allPlayers))
                .catch((err) => res.status(500).json(err));
        },
    
    // Getting Single User
        getPlayer(req, res) {
            Player.findOne({ _id: req.params.id})
                .select('-__v')
                .then((getPlayer) =>
                    !Player
                        ? res.status(404).json({message: 'Error: Player ID not found'})
                        : res.json(Player)
                )
                .catch((err) => res.status(500).json(err));
        },
    
    
    
    // Updating a Current User
        updatePlayer({ params, body }, res) {
            Player.findOneAndUpdate (
                { _id: params.id },
                body, { new : true, runValidator: true},
            )
                .then((updatePlayer) =>
                    !updatePlayer
                        ? res.status(404).json({message: 'Error: Player ID not found'})
                        : res.json(updatePlayer)
                )
                .catch((err) => res.status(500).json(err));
        },
    
    //Deleting a Player
        deletePlayer(req, res) {
            Player.findOneAndDelete ({ _id: req.params.id})
                .then((deletePlayer) =>
                    !deletePlayer
                        ? res.status(404).json({message: 'Error: Player ID not found'})
                        : Thought.deleteMany ({ _id: {$in: deleteUser.thoughts}})
                )
                .then(() => res.json({message: 'Success! Player and user thoughts have been deleted! '}))
                .catch((err) => res.status(500).json(err));
        },
    
    
   