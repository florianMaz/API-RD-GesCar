const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const http = require('http');

require('./routes');

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

http.createServer(app.callback()).listen(3000);
console.log('listening on port 3000');
