/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { IntlProvider } from 'react-intl-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { AppContainer } from 'react-hot-loader';
import createLogger from 'redux-logger';

import App from './app';
import rootReducer from './app/reducers';
import DevTools from './app/containers/DevTools';

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
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      createLogger(),
    ),
    DevTools.instrument(),
  ),
);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider>
          <MuiThemeProvider>
            <div>
              <App history={history} />
              <DevTools />
            </div>
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', renderApp);

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}
