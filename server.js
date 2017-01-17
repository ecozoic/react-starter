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

app.use(compress());

app.use(favicon(`${__dirname}/dist/favicon.ico`));

if (process.env.NODE_ENV === 'development') {
  app.use(logger());
}

app.use(conditional());
app.use(etag());

app.use(mount('/assets', serve('dist/assets', {
  maxage: 365 * 24 * 60 * 60 * 1000
})));

app.use(function*() {
  yield send(this, 'dist/index.html', {
    maxage: 0
  });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Server listening on port: ${port}`);
