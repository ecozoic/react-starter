import { combineReducers } from 'redux';

import { todosReducer as todos } from './todos';
import { appStatusReducer as appStatus, AppStatusState } from './appStatus';
import { Todo } from '../models';

/**
 * Root reducer
 */
const rootReducer = combineReducers<State>({
  todos,
  appStatus,
});

export interface State {
  todos?: Todo[];
  appStatus?: AppStatusState;
}

export default rootReducer;
