import { combineReducers } from 'redux';

import { todosReducer as todos, TodosState } from './todos';

const rootReducer = combineReducers<State>({
  todos,
});

export interface State {
  todos?: TodosState;
}

export default rootReducer;
