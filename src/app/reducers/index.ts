import { combineReducers } from 'redux';

import { todosReducer as todos } from './todos';
import { Todo } from '../models';

const rootReducer = combineReducers<State>({
  todos,
});

export interface State {
  todos?: Todo[];
}

export default rootReducer;