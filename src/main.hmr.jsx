/* @flow */
import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { App } from './app/app.component';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app/app.component', renderApp);
}
