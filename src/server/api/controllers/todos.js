const koa = require('koa');
const route = require('koa-route');
const faker = require('faker');

const app = koa();

function* fetch() {
  this.body = yield [
    faker.hacker.verb(),
    faker.hacker.verb(),
    faker.hacker.verb(),
  ];
}

app.use(route.get('/', fetch));

module.exports = app;
