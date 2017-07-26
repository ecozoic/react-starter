import { State } from '../reducers';

export const getTodos = (state: State) => state.todos.allIds.map(id => state.todos.byId[id]);
