# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org).

## [4.1.0 - 2017-07-26]
### Added
- Added uuid to generate unique IDs for todos
- Added semantic-ui-react
- Added babel to Webpack build pipeline to support babel-plugin-lodash
- Added lodash
- Added normalizr

### Changed
- Updated several dependencies to their latest versions
- Updated favicon
- Normalized todos state
- Refactored action types to use string enums rather than type literals

### Removed
- Removed material-ui

### Fixed
- Fixed issue with HMR forcing components to unmount

## [4.0.0 - 2017-07-18]
### Added
- Added pushstate-server
- Added dotenv-cli to load .env for pushstate-server

### Changed
- Updated Webpack to 3.3.0
- Updated Typescript to 2.4.1
- Updated several dependencies to their latest versions
- Updated README

### Removed
- Removed all Koa code and dependencies, we goin' serverless!

## [3.2.0 - 2017-06-30]
### Added
- Added rxjs and redux-observable
- Added ts-jest

### Changed
- Set tsconfig.json to allowSyntheticDefaultImports

### Removed
- Removed redux-saga
- Removed custom Jest preprocessor

### Changed
- Updated README

## [3.1.1] - 2017-06-20
### Changed
- Updated several dependencies to their latest versions

### Removed
- Removed react-intl and redux-form

## [3.1.0] - 2017-06-14
### Added
- More unit tests

### Changed
- Refactored to use redux-saga
- Updated Node to 6.11.0
- Updated React to 15.6.0
- Updated several other dependencies to latest versions

### Removed
- Removed redux-thunk and redux-promise-middleware

## [3.0.2] - 2017-05-25
### Changed
- Refactor reducers and containers
- Update webpack to 2.6.1
- Revert @types/react to 15.0.24
- Updated README

### Removed
- Removed unused dependencies

## [3.0.1] - 2017-05-25
### Changed
- Improved tslint configuration to use tslint-config-airbnb
- Refactor components to use SFCs
- Updated several dependencies to their latest versions

## [3.0.0] - 2017-05-19
### Added
- TypeScript support
- tslint
- typedoc
- vendor.hmr webpack entry to improve code splitting in development
- Core.js for polyfills

### Removed
- Babel
- Nightwatch
- Storybook

### Changed
- Updated several dependencies to their latest versions
- Improved webpack build configurations
- Updated README

## [2.5.0] - 2017-05-15
### Added
- redux saga
- flux-standard-action lib to verify actions are FSA-compliant

### Changed
- Swapped out aphrodite for webpack CSS modules
- Updated several dependencies to their latest versions
- Updated README
- Updated Node and Yarn versions in package.json and .nvmrc

## [2.4.0] - 2017-04-19
### Added
- .gitattributes

### Changed
- Upgraded to React 15.5
- Refactored code to use standalone prop-types package
- Swapped out react-addons-test-utils for react-test-renderer
- Updated several dependencies to their latest version
- Updated Node and Yarn versions in package.json and .nvmrc

## [2.3.0] - 2017-03-23
### Added
- Added classnames

### Changed
- Improved aphrodite test setup with identity-obj-proxy and updated snapshots
- Improved webpack dotenv configuration system
- Updated several dependences to their latest versions
- Upgraded Node to 6.10.1
- Refactored for react-helmet 5.0.0
- Updated README

### Removed
- Removed jest/test-setup.js and correpsonding configuration option

## [2.2.1] - 2017-03-18
### Changed
- Updated several dependencies to their latest versions
- Replaced "npm run" with "yarn" in package.json scripts

## [2.2.0] - 2017-03-11
### Added
- Added redux-promise-middleware

### Changed
- Refactored actions to be FSA-compliant

## [2.1.0] - 2017-03-11
### Added
- Added aphrodite

### Changed
- Upgraded to react-router@4.0.0
- Updated README

### Removed
- Removed radium

## [2.0.0] - 2017-03-08
### Added
- Added radium support for CSS-in-JS
- Added reselect
- Added redux-mock-store
- Added unit tests for reducers, actions, and selectors
- Added .eslintignore file
- Added dedicated storybook section to .babelrc
- Added color to provide color tooling to JS
- Added index.js files to improve importing components
- Added deep-freeze to prevent mutation during tests

### Changed
- Updated several dependencies to their latest versions
- Updated README
- Improved .env configuration
- Upgraded yarn to 0.21.3
- Improved webpack configuration

### Removed
- Removed ImmutableJS
- Removed CSS modules
- Removed SASS and other CSS-related dependencies
- Removed .gitattributes

## [1.10.1]- 2017-02-24
### Changed
- Updated several dependencies to their latest versions

## [1.10.0] - 2017-02-24
### Added
- Added react-helmet support
- Added lodash b/c its always good to have lodash

### Changed
- Updated README

## [1.9.5] - 2017-02-24
### Changed
- Updated several depedencies to their latest versions

## [1.9.4] - 2017-02-23
### Changed
- Upgrade to Node 6.10.0
- Updated several dependencies to their latest versions

## [1.9.3] - 2017-02-22
### Changed
- Updated several dependencies to their latest versions

## [1.9.2] - 2017-02-21
### Changed
- Updated several dependencies to their latest versions

## [1.9.1] - 2017-02-20
### Changed
- Updated vscode settings for flow plugin
- Updated several dependencies to their latest versions

### Fixed
- Fixed jsdoc babel configuration
- Ignore .DS_Store

## [1.9.0] - 2017-02-16
### Added
- Added dotenv to handle environment specific configuration
- Added .env.sample

### Changed
- Updated several dependencies to their latest versions
- Updated gitignore to ignore .env files
- Updated README

## [1.8.0] - 2017-02-15
### Added
- Added concurrently to simplify running multiple commands

### Changed
- Updated README
- Updated babel-loader
- Updated yarn engine declaration in package.json to 0.20.3

### Fixed
- Fixed nightwatch configuration for new selenium-version

## [1.7.3] - 2017-02-14
### Changed
- Moved MuiThemeProvider to the main.jsx entry point files

## [1.7.2] - 2017-02-14
### Changed
- Updated several depedencies to their latest versions

## [1.7.1] - 2017-02-12
### Changed
- Updated several dependencies to their latest versions

## [1.7.0] - 2017-02-11
### Added
- Added eslint plugins for airbnb

### Changed
- Refactor for Airbnb style guide

### Fixed
- eslint-loader now properly lints js and jsx files

## [1.6.0] - 2017-02-10
### Added
- Added react-tap-event-plugin
- Added material-ui
- Added webpack-visualizer-plugin

### Changed
- Swapped out babel-preset-stage-2 for babel-preset-stage-1
- Swapped out core-js for babel-polyfill
- Swapped out font-awesome for material icons
- Updated .gitignore to avoid versioning generated webpack stats.html files
- Updated README

## [1.5.0] - 2017-02-10
### Added
- Added redux-form and react-intl support

### Changed
- Updated README

## [1.4.0] - 2017-02-09
### Added
- Added connected-react-router support
- Added simple About container component to test routing

### Changed
- Updated several dependencies to their latest versions
- Updated reducer HMR to account for connected-react-router
- Updated README

## [1.3.0] - 2017-02-06
### Added
- Added snapshot testing support
- Added unit tests for todo and todo list components

## [1.2.0] - 2017-02-04
### Added
- Added storybook support
- Added redux-thunk
- Added API route for todos

### Changed
- Updated several dependencies to their latest versions
- Updated Node version in .nvmrc and package.json engine declaration
- Updated README

## [1.1.3] - 2017-01-31
### Changed
- Updated several dependencies to their latest versions
- Refactored routes for react-router@4-beta

## [1.1.2] - 2017-01-27
### Changed
- Moved routes into dedicated directory
- Updated several dependencies to their latest versions

## [1.1.1] - 2017-01-23
### Changed
- Upgraded enzyme to 2.7.1

## [1.1.0] - 2017-01-22
### Added
- Added redux-immutable so entire state object can be immutable when using combineReducers

### Changed
- Simplified redux-logger stateTransform to use state.toJS()
- Set LogMonitor's select prop to project state as state.toJS()

## [1.0.0] - 2017-01-21
### Added
- Jest configuration for running server unit tests
- Added immutable.js
- Added scripts for test driven development
- Added redux-logger middleware for development

### Changed
- Updated README
- Updated engine declarations in package.json
- Updated several dependencies to their latest versions
- Moved front-end code into src/client directory
- Moved back-end code into src/server directory

## [0.8.0] - 2017-01-17
### Added
- Added nodemon to restart server in development
- Add --inspect flag to allow Node.js debugging via Chrome DevTools
- Added proxy configuration to Webpack-Dev-Server to forward /api/* requests to localhost:3000

## [0.7.1] - 2017-01-17
### Added
- Added normalize.css
- Added font-awesome

### Changed
- Updated README
- Improved default styling

### Removed
- Removed Google material icons

## [0.7.0] - 2017-01-16
### Added
- Added new tdd npm script that runs Jest in watch mode

### Changed
- Updated several dependencies to their latest versions
- Updated README

## [0.6.10] - 2017-01-05
### Changed
- Updated webpack-merge to 2.2.0

## [0.6.9] - 2017-01-05
### Changed
- Updated several dependencies to their latest versions

## [0.6.8]- 2017-01-04
### Changed
- Updated several dependencies to their latest versions
- Updated README

## [0.6.7] - 2017-01-03
### Changed
- Updated several dependencies to their latest versions

## [0.6.6] - 2016-12-30
### Added
- Added yarn to package.json engines declaration

### Changed
- Updated several dependencies to their latest versions

## [0.6.5] - 2016-12-23
### Changed
- Updated several dependencies to their latest versions

## [0.6.4] - 2016-12-21
### Changed
- Updated several dependencies to their latest versions
- Fixed nightwatch tests

## [0.6.3] - 2016-12-14
### Changed
- Updated several dependencies to their latest versions
- Updated README

## [0.6.2] - 2016-12-13
### Changed
- Updated several dependencies to their latest versions
- Updated README

## [0.6.1] - 2016-12-08
### Changed
- Updated Webpack Dev Server to 2.1.0-beta.12

## [0.6.0] - 2016-12-08
### Added
- Added maxage headers to served static assets
- Added etags support

### Changed
- Updated several dependencies to their latest versions
- Changed build directory structure to better facilitate caching

## [0.5.2] - 2016-12-02
### Fixed
- Fixed bug preventing HMR of components
- Fixed jsdoc generation by adding jsdoc-babel plugin

## [0.5.1] - 2016-11-30
### Changed
- Updated several dependencies to their latest versions
- Use babel cache directory

## [0.5.0] - 2016-11-28
### Added
- Added redux & react-redux support
- Added sample todo list application features
- Added .vscode/settings.json to disable IDE javascript validation (does not support object rest/spread)
- Added redux-devtools

### Changed
- Updated several dependencies to their latest versions
- Updated README
- Changed eslint parser to babel-eslint to support static properties
- Changed .eslintrc to support object rest/spread
- Added babel-preset-stage-2 to .babelrc to support static properties
- Shortened file naming convention
- Added camelcasing support to CSS modules configuration

### Removed
- Removed babel-transform-object-rest-spread-plugin since its included in stage-2 preset
- Removed barrel files b/c I'm tired of weird circular dependency issues

## [0.4.2] - 2016-11-25
### Added
- Added nightwatch e2e support

### Changed
- Updated README

## [0.4.1] - 2016-11-25
### Added
- Added Istanbul coverage reporting

### Changed
- Updated several dependencies to their latest versions

## [0.4.0] - 2016-11-24
### Added
- Added jsdoc support

### Changed
- Upgraded to react-router@4.0.0-alpha.6

### Fixed
- Routes now work properly with HMR

## [0.3.1] - 2016-11-22
### Added
- Added flow support

### Changed
- Updated README

## [0.3.0] - 2016-11-22
### Added
- Added jest + enzyme to run unit tests
- Added Travis CI support

### Changed
- Updated README

## [0.2.2] - 2016-11-21
### Fixed
- CSS now properly minified in production

### Added
- Added support for CSS modules
- Add postcss.config.js

## [0.2.1]- 2016-11-20
### Changed
- Update README
- Add david-dm badges to track dependency status

## [0.2.0] - 2016-11-20
### Fixed
- Fixed eslint configuration

### Changed
- Updated HMR setup to only provide hot loading code in development

### Added
- Basic routes using react-router
- gitattributes
- Yarn support

## [0.1.0] - 2016-11-17
### Added
- Added changelog
- Added HMR
- Added favicon
- Added static koa server

### Changed
- Rebuilt webpack build process using wepback 2
- Updated several dependencies to their latest versions
- Updated README