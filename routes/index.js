const router = require('koa-router')();
const carsRoutes = require('./cars.js');

router.use('/', carsRoutes);

module.exports = router;
