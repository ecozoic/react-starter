import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';

import { todosReducer as todos, TodosState } from './todos';

const rootReducer = combineReducers<State>({
  todos,
});

export interface State {
  readonly todos?: TodosState;
  readonly router?: RouterState;
}

export const INITIAL_STATE: State = {};

export default rootReducer;
