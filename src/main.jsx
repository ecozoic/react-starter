import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './main.scss';

import App from './app';

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp();
  });
}
