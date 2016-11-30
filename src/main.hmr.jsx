/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';
import { DevTools } from './app/containers/dev-tools';

import { App } from './app';
import { rootReducer } from './app/reducers';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const store = createStore(rootReducer, DevTools.instrument());

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
  module.hot.accept('./app/app', renderApp);

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(rootReducer);
  });
}
