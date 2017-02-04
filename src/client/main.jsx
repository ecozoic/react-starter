/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Immutable from 'immutable';

import { App } from './app';
import { rootReducer } from './app/reducers';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const initialState = Immutable.Map();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
