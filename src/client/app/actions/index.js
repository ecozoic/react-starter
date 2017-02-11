/* @flow */
import * as t from '../constants';

let nextTodoId = 0;

export const addTodo = text => ({
  type: t.ADD_TODO,
  // eslint-disable-next-line no-plusplus
  id: nextTodoId++,
  text,
});

export const toggleTodo = id => ({
  type: t.TOGGLE_TODO,
  id,
});

export const fetchingTodos = () => ({
  type: t.FETCHING_TODOS,
});

export const fetchedTodos = todos => ({
  type: t.FETCHED_TODOS,
  todos,
});

export const fetchTodos = () => (dispatch) => {
  dispatch(fetchingTodos());

  window.fetch('/api/todos')
    .then(response => response.json())
    .then((todos) => {
      dispatch(fetchedTodos(todos));
      todos.forEach(todo => dispatch(addTodo(todo)));
    });
};
