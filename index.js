const Koa = require('koa');
<<<<<<< HEAD
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const http = require('http');

require('./routes');
=======
const app = new Koa();
const test = require('./routes/cars');
>>>>>>> Florian

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

<<<<<<< HEAD
http.createServer(app.callback()).listen(3000);
console.log('listening on port 3000');
=======
app.listen(3000);
console.log('listen on port 3000');
>>>>>>> Florian
