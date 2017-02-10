/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Immutable from 'immutable';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { IntlProvider } from 'react-intl-redux';

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
  applyMiddleware(
    routerMiddleware(history),
    thunk
  )
);

render(
  <Provider store={store}>
    <IntlProvider intlSelector={intlSelector}>
      <App history={history} />
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);
