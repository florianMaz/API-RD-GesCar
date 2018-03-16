const Koa = require('koa');
const app = new Koa();
const test = require('./routes/cars');

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);
console.log('listen on port 3000');