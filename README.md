# react-starter
[![Build Status](https://travis-ci.org/ecozoic/react-starter.svg?branch=master)](https://travis-ci.org/ecozoic/react-starter) [![Dependency Status](https://david-dm.org/ecozoic/react-starter.svg)](https://david-dm.org/ecozoic/react-starter) [![devDependency Status](https://david-dm.org/ecozoic/react-starter/dev-status.png)](https://david-dm.org/ecozoic/react-starter?type=dev)

This project is a scaffold to start new react+redux projects powered by Webpack and TypeScript.

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

Starts a webpack-dev-server with HMR and redux-devtools at http://localhost:8080 and a Nodemon-monitored and debuggable (via Node's ```--inspect``` flag) Koa server at http://localhost:3000. 
The webpack-dev-server is configured to proxy HTTP calls to /api/* routes to the Koa server.

## Production
```
yarn build
yarn serve
```

Builds minified assets in the `/dist/` directory and serve them up using a koa server at http://localhost:8080. 
This production-ready server supports HTTP caching, etags, and conditional GET requests. 
A visualization of the webpack build will be produced in the `/webpack/stats` directory. 

## Tests
```
yarn test
```

Executes Jest unit tests and generate Istanbul coverage reports for both the client and server.

To develop using TDD (Jest in ```--watch``` mode), run:
```
yarn tdd
```
Starts the webpack-dev-server, Koa, and Jest.

## Documentation
```
yarn docs
```

Generates typedoc documentation.

## Configuration
Add environment specific configuration settings by creating a `.env` file in the root directory. `.env.sample` shows an example format. 
This file will be loaded by dotenv for both the client and server processes. 

## Tools & Features
* react, react-router
* redux, connected-react-router, redux-thunk, redux-promise-middleware, redux-saga
* redux-devtools, react-hot-loader
* material-ui, css modules, scss
* webpack, typescript
* uglifyJS + tree-shaking
* koa
* tslint, sasslint
* jest, enzyme, istanbul
* typedoc

## Roadmap
* Improve documentation
* Improve server error handling
* Auth boilerplate
* Server-side rendering
* Upgrade to Node7/Koa2