const koa = require('koa');
const route = require('koa-route');
const faker = require('faker');

const app = koa();

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function* fetch() {
  yield delay(1000);

  this.body = yield [
    faker.hacker.verb(),
    faker.hacker.verb(),
    faker.hacker.verb(),
  ];
}

app.use(route.get('/', fetch));

module.exports = app;
