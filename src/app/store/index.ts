import {
  createStore,
  applyMiddleware,
  Middleware,
  compose,
  GenericStoreEnhancer,
} from 'redux';

import { connectRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';

import config from '../config';
import rootReducer, { INITIAL_STATE } from '../reducers';
import rootEpic from '../epics';

const history = createBrowserHistory({
  basename: config.basename,
});

const epicMiddleware = createEpicMiddleware(rootEpic);
const routerMiddleware = createRouterMiddleware(history);

const defaultMiddleware = [
  routerMiddleware,
  epicMiddleware,
];

const configureStore =
  (middleware: Middleware[] = [], storeEnhancers: GenericStoreEnhancer[] = []) => {
    return createStore(
      connectRouter(history)(rootReducer),
      INITIAL_STATE,
      compose(
        applyMiddleware(
        ...defaultMiddleware,
        ...middleware,
        ),
        ...storeEnhancers,
      ),
    );
  };

export { configureStore, history, epicMiddleware, routerMiddleware };
