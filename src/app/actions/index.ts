import { Action as ReduxAction } from 'redux';
import uuid from 'uuid/v4';

import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS,
  FETCH_TODOS_PENDING,
  FETCH_TODOS_FULFILLED,
  FETCH_TODOS_REJECTED,
} from '../constants';

import { NormalizedTodoList } from '../models';

export interface Action<P = undefined, M = undefined> extends ReduxAction {
  readonly type: string;
  readonly payload?: P;
  readonly meta?: M;
  readonly error?: boolean;
}

export interface AddTodoPayload {
  readonly id: string;
  readonly text: string;
  readonly completed: false;
}

export interface ToggleTodoPayload {
  readonly id: string;
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

export interface FetchTodosFulfilledAction extends Action<NormalizedTodoList> {
  type: FETCH_TODOS_FULFILLED;
}

export interface FetchTodosRejectedAction extends Action<Error> {
  type: FETCH_TODOS_REJECTED;
}

export const addTodo: (text: string) => AddTodoAction = text => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    text,
    completed: false,
  },
});

export const toggleTodo: (id: string) => ToggleTodoAction = id => ({
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

export const fetchTodosFulfilled: (todos: NormalizedTodoList) => FetchTodosFulfilledAction =
  todos => ({
    type: FETCH_TODOS_FULFILLED,
    payload: todos,
  });

export const fetchTodosRejected: (error: Error) => FetchTodosRejectedAction = error => ({
  type: FETCH_TODOS_REJECTED,
  payload: error,
  error: true,
});
