# react-starter

A scaffold for React+Redux+Rxjs UIs powered by Webpack.

## Features
* react
* react-router, connected-react-router
* redux, redux-thunk, reselect
* rxjs, redux-observable
* redux-devtools, react-hot-loader
* semantic-ui, css modules
* jest, enzyme, istanbul
* plop  
* gh-pages, heroku, docker

## Installation
```
git clone https://github.com/ecozoic/react-starter
cd react-starter
yarn
```

## Development
Start a webpack-dev-server with HMR and redux-devtools:
```
yarn start
```

## Production
Build minified assets in the `/dist/` directory and serve them up using pushstate-server:   
```
yarn build
yarn serve
```

Visualizations of the webpack build will be produced in the `/webpack/stats` directory. 

## Tests
Execute jest unit tests and generate istanbul coverage reports:
```
yarn test
```

Develop using TDD (webpack-dev-server and jest in ```--watch``` mode):
```
yarn tdd
```

Start jest in ```--watch``` mode without starting webpack-dev-server:

```
yarn test:watch
```