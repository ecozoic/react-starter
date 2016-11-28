import * as t from '../constants';

let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: t.ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: t.TOGGLE_TODO,
    id
  };
};
