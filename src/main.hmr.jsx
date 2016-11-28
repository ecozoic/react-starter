/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';

import { App } from './app/app.component';
import todoApp from './app/reducers';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const store = createStore(todoApp);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app/app.component', renderApp);
}
