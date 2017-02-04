/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Immutable from 'immutable';

import { AppContainer } from 'react-hot-loader';
import { DevTools } from './app/containers/dev-tools';
import createLogger from 'redux-logger';

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
  compose(
    applyMiddleware(
      createLogger({
        stateTransformer: state => state.toJS()
      }),
      thunk
    ),
    DevTools.instrument()
  )
);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', renderApp);

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(rootReducer);
  });
}
