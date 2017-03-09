const koa = require('koa');
const route = require('koa-route');

const app = koa();

function* fetch() {
  this.body = yield ['Hey', 'Ho', 'Let\'s Go'];
}

app.use(route.get('/', fetch));

module.exports = app;
