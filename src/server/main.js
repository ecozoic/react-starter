// load environment configuration
require('dotenv').config();

const koa = require('koa');

const compress = require('koa-compress');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const favicon = require('koa-favicon');
const logger = require('koa-logger');
const mount = require('koa-mount');
const send = require('koa-send');
const serve = require('koa-static');

const app = koa();
const api = require('./api');

const isDevelopment = process.env.NODE_ENV === 'development';

app.use(compress());

app.use(favicon('dist/favicon.ico'));

if (isDevelopment) {
  app.use(logger());
}

app.use(conditional());
app.use(etag());

app.use(mount('/assets', serve('dist/assets', {
  maxage: 365 * 24 * 60 * 60 * 1000,
})));

app.use(mount('/api', api));

app.use(function* index() {
  yield send(this, 'dist/index.html', {
    maxage: 0,
  });
});

const port = isDevelopment ? process.env.PROXY_PORT : process.env.PORT;
app.listen(port);

// eslint-disable-next-line no-console
console.log(`Server listening on port: ${port}`);
