import { combineEpics } from 'redux-observable';

import counter from './counter';

const rootEpic = combineEpics(
  counter,
);

export default rootEpic;
