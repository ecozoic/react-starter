# react-starter
[![Build Status](https://travis-ci.org/ecozoic/react-starter.svg?branch=master)](https://travis-ci.org/ecozoic/react-starter) [![Dependency Status](https://david-dm.org/ecozoic/react-starter.svg)](https://david-dm.org/ecozoic/react-starter) [![devDependency Status](https://david-dm.org/ecozoic/react-starter/dev-status.png)](https://david-dm.org/ecozoic/react-starter?type=dev)

This project is a scaffold to start new react+redux projects powered by Webpack.

## Installation
```
git clone https://github.com/ecozoic/react-starter
cd react-starter
yarn
```

## Development
```
yarn start
```

This will start up a webpack-dev-server with hot module replacement and redux-devtools.

If you have an API exposed by your Node server, you can additionally start up a development Koa server by running:
```
yarn serve:dev
```

This will spin up a Nodemon-monitored and debuggable (via Node's ```--inspect``` flag) Koa server. The webpack-dev-server is configured to proxy HTTP calls to /api/* routes to the Koa server.

## Production
```
yarn build
yarn serve
```

This will generate minified assets in the /dist/ directory and serve them up using a Koa HTTP server. This production-ready server supports HTTP caching, etags, and conditional GET requests.

## Tests
```
yarn test
```

This will execute Jest unit tests and generate Istanbul coverage reports for both the client and server. You can run the tests separately as well.
```
yarn test:client
yarn test:server
```

To run Nightwatch e2e tests, ensure the app is running with either ```yarn start``` or ```yarn serve``` and then run:
```
yarn e2e
```

To develop using TDD (Jest in ```--watch``` mode) for either the client or server, run:
```
yarn tdd:client
yarn tdd:server
```
Note that the TDD scripts do not generate coverage reports.

## Documentation
```
yarn docs
```

This will generate jsdoc documentation.

## Flow
```
yarn flow
```

This will execute static type-checking with flow.

## Tools & Features
* Build powered by Webpack 2 and Babel 6
* Optimized production build with UglifyJS + tree-shaking
* Linting with eslint and sass-lint, static type-checking with Flow
* Unit tests with Jest, Enzyme, and Istanbul coverage reports
* E2E testing with Nightwatch
* SASS + cssnext for CSS preprocessing
* Autogenerated documentation via jsdoc

## Roadmap
* redux-router / Connected Router
* Improve documentation
* More unit test coverage
* Improve flow typing
* Snapshot testing