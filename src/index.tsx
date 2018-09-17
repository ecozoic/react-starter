import '@babel/polyfill';

// TODO: rxjs
// TODO: react-helmet
// TODO: redux typings
// TODO: eslint, stylelint (styled-components)
// TODO: circleCI
// TODO: deployment (gh pages, aws (s3, cloudfront))
// TODO: documentation

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { rootReducer } from './redux/modules/root';
import configureStore from './redux/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <ThemeProvider theme={{ color: 'blue' }}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./redux/modules/root', () => {
    store.replaceReducer(rootReducer);
  });
}
