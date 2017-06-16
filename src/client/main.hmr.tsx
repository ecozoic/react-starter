import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { AppContainer } from 'react-hot-loader';
import { createLogger } from 'redux-logger';

import App from './app';
import rootReducer from './app/reducers';
import DevTools from './app/containers/DevTools';
import saga from './app/sagas';

import './favicon.ico';

injectTapEventPlugin();

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      createLogger(),
    ),
    DevTools.instrument(),
  ),
);

sagaMiddleware.run(saga);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <App history={history} />
            <DevTools />
          </div>
        </MuiThemeProvider>
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
