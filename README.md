# react-starter

This project is a scaffold to start new react+redux projects powered by Webpack.

## Installation
```
git clone https://github.com/ecozoic/react-starter
cd react-starter
npm install
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

## Tools & Features
* Build powered by Webpack 2 and Babel
* Optimized production build with UglifyJS + tree-shaking
* Linting with eslint and sass-lint
* SASS + postcss-cssnext for CSS preprocessing

## Roadmap
* jsdoc
* HMR
* redux + router

## Known Issues
* CSS not being minified in production (Uglify plugin no longer automatically switches loaders into minification mode)
* Yarn still having issues installing scoped packages on Windows: https://github.com/yarnpkg/yarn/issues/1861