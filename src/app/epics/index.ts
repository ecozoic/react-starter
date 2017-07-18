import { combineEpics } from 'redux-observable';

import { fetchTodosEpic } from './todos';

const rootEpic = combineEpics(
  fetchTodosEpic,
);

export default rootEpic;
