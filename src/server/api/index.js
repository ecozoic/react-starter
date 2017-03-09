const koa = require('koa');
const mount = require('koa-mount');

const app = koa();
const todos = require('./controllers/todos');

app.use(mount('/todos', todos));

// eslint-disable-next-line require-yield
app.use(function* notFound() {
  this.status = 404;
});

module.exports = app;
