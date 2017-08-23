import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/index';
import { configureStore, history } from './app/store/index';

import './main.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app'),
);
