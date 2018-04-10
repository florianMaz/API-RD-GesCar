const Koa = require('koa');
//const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const router = require('./routes');

const app = new Koa();
//const router = new Router();

app.use(BodyParser());

/*router.get("/", async function (ctx){
  ctx.body = {message: "Ta race"}
});

router.post("/", async function (ctx){
  let name = ctx.request.body.name || "World";
  ctx.body = {message: `Hello ${name}!`}
});
*/

app
    .use(router.allowedMethods())
    .use(router.routes());

app.listen(3000);
console.log("Running on port 3000");

module.exports = app;

//app.listen(3000);
