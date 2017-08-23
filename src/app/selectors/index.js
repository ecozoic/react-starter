export const getTodos = state => state.todos.allIds.map(id => state.todos.byId[id]);
