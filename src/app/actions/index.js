import _ from 'lodash';

import { ActionTypes } from '../constants';

export const addTodo = text => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: _.uniqueId(),
    text,
    completed: false,
  },
});

export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const fetchTodos = () => ({
  type: ActionTypes.FETCH_TODOS,
});

export const fetchTodosPending = () => ({
  type: ActionTypes.FETCH_TODOS_PENDING,
});

export const fetchTodosFulfilled = todos => ({
  type: ActionTypes.FETCH_TODOS_FULFILLED,
  payload: todos,
});

export const fetchTodosRejected = error => ({
  type: ActionTypes.FETCH_TODOS_REJECTED,
  payload: error,
  error: true,
});
