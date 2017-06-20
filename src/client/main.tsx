import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';
import rootReducer, { State } from './app/reducers';
import saga from './app/sagas';

import './favicon.ico';

injectTapEventPlugin();

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const initialState = {} as State;

const store = createStore<State>(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  ),
);

sagaMiddleware.run(saga);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
