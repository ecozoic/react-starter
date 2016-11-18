const koa = require('koa');

const compress = require('koa-compress');
const favicon = require('koa-favicon');
const logger = require('koa-logger');
const send = require('koa-send');
const serve = require('koa-static');

const app = koa();

app.use(compress());

app.use(favicon(`${__dirname}/dist/favicon.ico`));

app.use(logger());

// TODO: caching
app.use(serve('./dist'));

app.use(function*() {
  yield send(this, 'dist/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Server listening on port: ${port}`);
