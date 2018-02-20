import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import 'rxjs';
import { createEpicMiddleware } from 'redux-observable';

import './main.scss';

import App from './app';
import rootReducer from './app/reducers';
import rootEpic from './app/epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(epicMiddleware),
  ),
);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    console.log('Component changed... re-rendering application');
    renderApp();
  });

  module.hot.accept('./app/reducers', () => {
    console.log('Reducer changed... replacing root reducer');
    store.replaceReducer(rootReducer);
  });

  module.hot.accept('./app/epics', () => {
    console.log('Epic changed... replacing root epic');
    epicMiddleware.replaceEpic(rootEpic);
  });
}
