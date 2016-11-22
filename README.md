# react-starter
[![Build Status](https://travis-ci.org/ecozoic/react-starter.svg?branch=master)](https://travis-ci.org/ecozoic/react-starter) [![Dependency Status](https://david-dm.org/ecozoic/react-starter.svg)](https://david-dm.org/ecozoic/react-starter) [![devDependency Status](https://david-dm.org/ecozoic/react-starter/dev-status.png)](https://david-dm.org/ecozoic/react-starter?type=dev)

This project is a scaffold to start new react+redux projects powered by Webpack.

## Installation
```
git clone https://github.com/ecozoic/react-starter
cd react-starter
yarn install
```

## Development
```
npm start
```

This will start up a webpack-dev-server with hot module replacement.

## Production
```
npm run build
npm run serve
```

This will generate minified assets in the dist directory and serve them up using a simple Koa server.

## Tests
```
npm test
```

This will execute unit tests powered by Jest and Enzyme.

## Tools & Features
* Build powered by Webpack 2 and Babel
* Hot module replacement with react-hot-loader 3
* Optimized production build with UglifyJS + tree-shaking
* Static type checking with Flow
* Linting with eslint and sass-lint
* SASS + postcss-cssnext for CSS preprocessing

## Roadmap
* jsdoc
* coverage reporting
* e2e testing w/ nightwatch
* redux + redux-router