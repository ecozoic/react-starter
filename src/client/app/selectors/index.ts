import { State } from '../reducers';
import { Todo } from '../models';

export const getTodos = (state: State) => state.todos;
