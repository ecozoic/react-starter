/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { IntlProvider } from 'react-intl-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { AppContainer } from 'react-hot-loader';
import createLogger from 'redux-logger';

import App from './app/App';
import rootReducer from './app/reducers';
import DevTools from './app/containers/DevTools';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

injectTapEventPlugin();

const history = createBrowserHistory();
const initialState = fromJS({
  intl: {
    locale: 'en',
    messages: {},
  },
});
const intlSelector = state => state.get('intl').toJS();

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      createLogger({
        stateTransformer: state => state.toJS(),
      }),
    ),
    DevTools.instrument(),
  ),
);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider intlSelector={intlSelector}>
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
  module.hot.accept('./app/App', renderApp);

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}
