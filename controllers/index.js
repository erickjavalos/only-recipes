// build in libraries
const router = require('express').Router();
// get helper routes
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api/');

// instantiate routes for home page and backed api
router.use('/', homeRoutes);
router.use('/api', apiRoutes)

module.exports = router;
