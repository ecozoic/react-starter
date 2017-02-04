const koa = require('koa');
const route = require('koa-route');

const app = koa();

app.use(route.get('/', fetch));

function* fetch() {
  this.body = yield ['Hey', 'Ho', 'Let\'s Go'];
}

module.exports = app;
