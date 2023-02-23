const router = require('express').Router();
const playerRoutes = require('./player-routes');
// const another route = require('./ another-routes.js');

router.use('/player', playerRoutes);
// router.use('/anotherroute', anotherRoute);

module.exports = router;