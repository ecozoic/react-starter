import { Action as ReduxAction } from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS,
  FETCH_TODOS_PENDING,
  FETCH_TODOS_FULFILLED,
  FETCH_TODOS_REJECTED,
} from '../constants';

export interface Action<P = undefined, M = undefined> extends ReduxAction {
  readonly type: string;
  readonly payload?: P;
  readonly meta?: M;
  readonly error?: boolean;
}

export interface AddTodoPayload {
  readonly text: string;
}

export interface ToggleTodoPayload {
  readonly id: number;
}

export interface AddTodoAction extends Action<AddTodoPayload>  {
  type: ADD_TODO;
}

export interface ToggleTodoAction extends Action<ToggleTodoPayload> {
  type: TOGGLE_TODO;
}

export interface FetchTodosAction extends Action {
  type: FETCH_TODOS;
}

export interface FetchTodosPendingAction extends Action {
  type: FETCH_TODOS_PENDING;
}

export interface FetchTodosFulfilledAction extends Action<string[]> {
  type: FETCH_TODOS_FULFILLED;
}

export interface FetchTodosRejectedAction extends Action<Error> {
  type: FETCH_TODOS_REJECTED;
}

export const addTodo: (text: string) => AddTodoAction = text => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo: (id: number) => ToggleTodoAction = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const fetchTodos: () => FetchTodosAction = () => ({
  type: FETCH_TODOS,
});

export const fetchTodosPending: () => FetchTodosPendingAction = () => ({
  type: FETCH_TODOS_PENDING,
});

export const fetchTodosFulfilled: (todos: string[]) => FetchTodosFulfilledAction = todos => ({
  type: FETCH_TODOS_FULFILLED,
  payload: todos,
});

export const fetchTodosRejected: (error: Error) => FetchTodosRejectedAction = error => ({
  type: FETCH_TODOS_REJECTED,
  payload: error,
  error: true,
});
