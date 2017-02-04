/* @flow */
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

export const fetchingTodos = () => {
  return {
    type: t.FETCHING_TODOS
  };
};

export const fetchedTodos = (todos) => {
  return {
    type: t.FETCHED_TODOS,
    todos
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchingTodos());

    window.fetch('/api/todos')
      .then((response) => response.json())
      .then((todos) => {
        dispatch(fetchedTodos(todos));
        todos.forEach(todo => dispatch(addTodo(todo)));
      });
  };
};
