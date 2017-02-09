/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Immutable from 'immutable';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';

import { App } from './app';
import { rootReducer } from './app/reducers';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const history = createBrowserHistory();
const initialState = Immutable.Map();

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(
    routerMiddleware(history),
    thunk
  )
);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app')
);
