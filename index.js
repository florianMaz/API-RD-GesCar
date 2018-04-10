const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('koa-router');
const app = new Koa();
const router = require('./routes');

//const http = require('http');

require('./routes');


// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.use(bodyParser());
app.use(responseTime());
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
//http.createServer(app.callback()).listen(3000);
console.log('listening on port 3000');
