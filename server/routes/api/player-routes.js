const router = require('express').Router();

const{
    getAllPlayers,
    createPlayer,
    getPlayer,
    deletePlayer,
} = require('../controllers/player-controller');


router.route('/').get(getAllPlayers);
router.route('/').post(createPlayer);
router.route('/:id').get(getPlayer);
router.route('/:id').delete(deletePlayer);

module.exports = router;