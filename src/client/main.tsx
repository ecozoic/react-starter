import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';
import rootReducer, { State } from './app/reducers';
import rootEpic from './app/epics';

import './favicon.ico';

injectTapEventPlugin();

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
    <MuiThemeProvider>
      <App history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
