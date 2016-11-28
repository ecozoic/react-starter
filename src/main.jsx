/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './app/app.component';
import todoApp from './app/reducers';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
