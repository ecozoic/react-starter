import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import { rootEpic, rootReducer } from './modules/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk, epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
