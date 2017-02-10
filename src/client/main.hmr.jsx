/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Immutable from 'immutable';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { IntlProvider } from 'react-intl-redux';

// support touch events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { AppContainer } from 'react-hot-loader';
import { DevTools } from './app/containers/dev-tools';
import createLogger from 'redux-logger';

import { App } from './app';
import { rootReducer } from './app/reducers';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const history = createBrowserHistory();
const initialState = Immutable.fromJS({
  intl: {
    locale: 'en',
    messages: {}
  }
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
        stateTransformer: state => state.toJS()
      })
    ),
    DevTools.instrument()
  )
);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider intlSelector={intlSelector}>
          <div>
            <App history={history} />
            <DevTools />
          </div>
        </IntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', renderApp);

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}
