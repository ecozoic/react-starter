# react-starter
[![Build Status](https://travis-ci.org/ecozoic/react-starter.svg?branch=master)](https://travis-ci.org/ecozoic/react-starter) [![Dependency Status](https://david-dm.org/ecozoic/react-starter.svg)](https://david-dm.org/ecozoic/react-starter) [![devDependency Status](https://david-dm.org/ecozoic/react-starter/dev-status.png)](https://david-dm.org/ecozoic/react-starter?type=dev)

This project is a scaffold to start new React+Redux+Rxjs projects powered by Webpack+TypeScript.

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

Starts a webpack-dev-server with HMR and redux-devtools at http://localhost:8080.

## Production
```
yarn build
yarn serve
```

Builds minified assets in the `/dist/` directory and serve them up using pushstate-server at http://localhost:8080. 
A visualization of the webpack build will be produced in the `/webpack/stats` directory. 

## Tests
```
yarn test
```

Executes jest unit tests and generate istanbul coverage reports.

To develop using TDD (jest in ```--watch``` mode), run:
```
yarn tdd
```
Starts webpack-dev-server and jest.

```
yarn test:watch
```
Starts jest in ```--watch``` mode without starting webpack-dev-server

## Documentation
```
yarn docs
```

Generates typedoc documentation (NOTE: this is currently broken until typedoc updates to TypeScript 2.4)

## Configuration
Add environment specific configuration settings by creating a `.env` file in the root directory. `.env.sample` shows an example format. 
This file will be loaded with dotenv by webpack during build. 

## Features
* react, react-router
* redux, connected-react-router, reselect
* rxjs, redux-observable
* redux-devtools, react-hot-loader
* semantic-ui, css modules
* jest, enzyme, istanbul