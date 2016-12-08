# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org).

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