# react-starter
[![Build Status](https://travis-ci.org/ecozoic/react-starter.svg?branch=master)](https://travis-ci.org/ecozoic/react-starter) [![Dependency Status](https://david-dm.org/ecozoic/react-starter.svg)](https://david-dm.org/ecozoic/react-starter) [![devDependency Status](https://david-dm.org/ecozoic/react-starter/dev-status.png)](https://david-dm.org/ecozoic/react-starter?type=dev)

A scaffold for React+Redux+Rxjs UIs powered by Webpack+TypeScript.

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

## Documentation
Generate typedoc documentation in the `/docs/` directory  
```
yarn docs
```

## Configuration
* Add environment-specific configuration settings by creating a `.env` file in the root directory
* `.env.sample` shows an example format with supported values
* If no `.env` file is present or any values are missing, the default values specified in `.env.sample` will be used
* The `.env` file is loaded by webpack at buildtime (via dotenv) and pushstate-server at runtime (via dotenv-cli)

## Plop
The following plop generators are supported:
* component
* container
* epic
* reducer
* route

Run plop:
```
yarn plop
```

Run a specific plop generator:
```
yarn plop component
```

## Deployment
This scaffold includes support for the following deployment strategies: 
* Github Pages
* Docker
* Heroku

### Github Pages
To deploy using gh-pages:  
```
yarn deploy
```

This produces a production build and pushes it to the repo's gh-pages branch which can be configured further on Github.  

Note that Github Pages for individual projects is not hosted at the root of the domain (i.e., for this repo it's at https://ecozoic.github.io/react-starter/). You need to set the `BASENAME` environment variable accordingly to adjust the URLs generated by webpack and react-router's history object.  

Also note that Github Pages does not provide out of the box support for SPA-friendly routing. Check out the spa-github-pages repo on GitHub for more information.

### Docker
To build a docker image:
```
docker build -t react-starter .
```

To start a container:
```
docker run -d --name react-starter -p 8080:8080 react-starter
```

As part of a `docker-compose.yml`:
```
version: "3"
services:
  ui:
    build: .
    image: react-starter
    ports:
      - 8080:8080
```

This project also includes a `docker-compose.yml` that serves up your UI using nginx and provides Portainer to manage your docker containers.  

You can access nginx via port 8080, the Node server via port 8081 for debugging purposes, and Portainer via port 9000.

To start the stack:  
```
docker-compose up
```

To stop the stack:  
```
docker-compose down
```

### Heroku
To create a new Heroku application:
```
heroku create
```

To add remote pointing to an existing Heroku application:
```
heroku git:remote -a react-starter
```

To deploy:
```
git push heroku master
```

Note that since we are using Heroku to build our application, you need to set the `NPM_CONFIG_PRODUCTION` environment variable to `false` in Heroku's config vars UI. This is to make sure it pulls down our devDependencies. By default, Heroku sets this value to `true`. 