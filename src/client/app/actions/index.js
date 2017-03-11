/* @flow */
import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from '../constants';

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    // eslint-disable-next-line no-plusplus
    id: nextTodoId++,
    text,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const fetchTodos = () => dispatch => dispatch({
  type: FETCH_TODOS,
  payload: window.fetch('/api/todos')
    .then(response => response.json())
    .then((todos) => {
      todos.forEach(todo => dispatch(addTodo(todo)));
    }),
});
