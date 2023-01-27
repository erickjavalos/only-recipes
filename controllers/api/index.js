const router = require('express').Router();
const userRoutes = require('./user-routes');

// instantiates users api
router.use('/users', userRoutes);

module.exports = router;
