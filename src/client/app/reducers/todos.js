/* @flow */
import * as t from '../constants';

export const todoReducer = (todo = {}, action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case t.TOGGLE_TODO:
      if (todo.id !== action.id) {
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

export const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return [
        ...todos,
        todoReducer(undefined, action),
      ];
    case t.TOGGLE_TODO:
      return todos.map(td => todoReducer(td, action));
    default:
      return todos;
  }
};
