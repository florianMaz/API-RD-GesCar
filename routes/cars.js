const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'get list cars';
    console.log(ctx.body);
    })
    .post('/cars', (ctx, next) => {
        // add cars
    })
    .put('/cars/:id', (ctx, next) => {
        // modif cars
    })
    .del('/cars/:id', (ctx, next) => {
        // remove cars
    });

app.use(router.routes())
    .use(router.allowedMethods());