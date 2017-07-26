import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose, StoreEnhancerStoreCreator } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { AppContainer } from 'react-hot-loader';
import { createLogger } from 'redux-logger';

import App from './app';
import rootReducer, { State } from './app/reducers';
import rootEpic from './app/epics';
import DevTools from './app/containers/DevTools';

import './favicon.ico';
import './main.scss';

const history = createBrowserHistory();
const initialState = {} as State;
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose<StoreEnhancerStoreCreator<State>>(
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware,
      createLogger(),
    ),
    DevTools.instrument(),
  ),
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
  module.hot.accept('./app', renderApp);

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });

  module.hot.accept('./app/epics', () => {
    epicMiddleware.replaceEpic(rootEpic);
  });
}
