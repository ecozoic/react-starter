/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Root } from './app/root.component';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./app/root.component', render);
}
