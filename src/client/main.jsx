/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { IntlProvider } from 'react-intl-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/App';
import rootReducer from './app/reducers';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

injectTapEventPlugin();

const history = createBrowserHistory();
const initialState = {};

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(
    routerMiddleware(history),
    thunk,
  ),
);

render(
  <Provider store={store}>
    <IntlProvider>
      <MuiThemeProvider>
        <App history={history} />
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('app'),
);
