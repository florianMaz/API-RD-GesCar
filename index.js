const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
//const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:3000/todo';
const indexRoutes = require('./routes/index');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(indexRoutes.routes());

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
