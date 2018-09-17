import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import greeting from './greeting';

export const rootReducer = combineReducers({
  greeting,
});

export const rootEpic = combineEpics();
