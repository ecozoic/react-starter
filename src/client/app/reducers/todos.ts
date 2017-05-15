import { ADD_TODO, TOGGLE_TODO } from '../constants';

export const todoReducer = (todo = {}, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (todo.id !== action.payload.id) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed,
      };
    default:
      return todo;
  }
};

export const todosReducer = (todos = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        todoReducer(undefined, action),
      ];
    case TOGGLE_TODO:
      return todos.map(td => todoReducer(td, action));
    default:
      return todos;
  }
};
