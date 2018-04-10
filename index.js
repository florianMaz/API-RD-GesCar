const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const router = require('./routes');

const app = new Koa();
app.use(BodyParser());
app
    .use(router.allowedMethods())
    .use(router.routes());

app.listen(3000);
console.log("Running on port 3000");

module.exports = app;
