const koa = require('koa');
const mount = require('koa-mount');

const app = koa();
const todos = require('./controllers/todos');

app.use(mount('/todos', todos));

app.use(function*() {
  this.status = 404;
});

module.exports = app;
