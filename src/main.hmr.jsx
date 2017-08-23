import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connectRouter } from 'connected-react-router';

import { AppContainer } from 'react-hot-loader';
import { createLogger } from 'redux-logger';

import App from './app/index';
import { configureStore, history, epicMiddleware } from './app/store/index';
import rootReducer from './app/reducers/index';
import rootEpic from './app/epics/index';
import DevTools from './app/containers/DevTools/index';

import './main.scss';

const store = configureStore(
  [
    createLogger(),
  ],
  [
    DevTools.instrument(),
  ],
);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <App history={history} />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    console.log('render!');
    renderApp();
  });

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });

  module.hot.accept('./app/epics', () => {
    epicMiddleware.replaceEpic(rootEpic);
  });
}
