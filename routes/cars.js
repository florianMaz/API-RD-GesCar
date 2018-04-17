const router = require('koa-router')();

async function getCars(ctx){
    ctx.body = {"mark" : "BMW"};
}

router.get('/', getCars);

module.exports = router.routes();