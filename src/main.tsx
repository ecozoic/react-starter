import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import App from './app';
import rootReducer, { State } from './app/reducers';
import rootEpic from './app/epics';

import './favicon.ico';
import './main.scss';

const history = createBrowserHistory();
const initialState = {} as State;

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(
    routerMiddleware(history),
    createEpicMiddleware(rootEpic),
  ),
);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app'),
);
