import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
// TODO: optimize rxjs imports
import 'rxjs';
import { identity } from 'lodash-es';
import { createEpicMiddleware } from 'redux-observable';

import './main.scss';

import App from './app';
import rootReducer from './app/reducers';
import rootEpic from './app/epics';

// eslint-disable-next-line no-console
console.log(identity('Welcome to React Starter!'));

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(rootReducer);
  });

  module.hot.accept('./app/epics', () => {
    epicMiddleware.replaceEpic(rootEpic);
  });
}
