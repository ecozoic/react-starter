import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';

import config from '../config/index';
import rootReducer, { INITIAL_STATE } from '../reducers/index';
import rootEpic from '../epics/index';

const history = createBrowserHistory({
  basename: config.basename,
});

const epicMiddleware = createEpicMiddleware(rootEpic);
const routerMiddleware = createRouterMiddleware(history);

const defaultMiddleware = [
  routerMiddleware,
  thunk,
  epicMiddleware,
];

const configureStore =
  (middleware = [], storeEnhancers = []) => createStore(
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

export { configureStore, history, epicMiddleware, routerMiddleware };
