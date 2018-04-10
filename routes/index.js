const router = require('koa-router')();
const carsRoutes = require('./cars');

router.use('/cars', carsRoutes);

module.exports = router;
