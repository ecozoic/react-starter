// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';

import { todosReducer as todos, TodosState } from './todos';

const rootReducer = combineReducers<State>({
  todos,
});

export interface State {
  todos?: TodosState;
}

export const INITIAL_STATE: State = {};

export default rootReducer;
