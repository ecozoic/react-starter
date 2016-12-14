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

## Production
```
yarn build
yarn serve
```

This will generate minified assets in the dist directory and serve them up using a simple Koa server.

## Tests
```
yarn test
```

This will execute Jest unit tests and generate Istanbul coverage reports.

To run Nightwatch e2e tests, ensure the app is running with either ```yarn start``` or ```yarn serve``` and then run:
```
yarn e2e
```

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
* redux-router

## Known Issues
* Can't upgrade to Sass@4.x until sass-loader gets updated