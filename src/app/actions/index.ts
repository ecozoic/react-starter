import { Action as ReduxAction } from 'redux';
import _ from 'lodash';

import { ActionTypes } from '../constants';
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
  type: ActionTypes.ADD_TODO;
}

export interface ToggleTodoAction extends Action<ToggleTodoPayload> {
  type: ActionTypes.TOGGLE_TODO;
}

export interface FetchTodosAction extends Action {
  type: ActionTypes.FETCH_TODOS;
}

export interface FetchTodosPendingAction extends Action {
  type: ActionTypes.FETCH_TODOS_PENDING;
}

export interface FetchTodosFulfilledAction extends Action<NormalizedTodoList> {
  type: ActionTypes.FETCH_TODOS_FULFILLED;
}

export interface FetchTodosRejectedAction extends Action<Error> {
  type: ActionTypes.FETCH_TODOS_REJECTED;
}

export const addTodo: (text: string) => AddTodoAction = text => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: _.uniqueId(),
    text,
    completed: false,
  },
});

export const toggleTodo: (id: string) => ToggleTodoAction = id => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const fetchTodos: () => FetchTodosAction = () => ({
  type: ActionTypes.FETCH_TODOS,
});

export const fetchTodosPending: () => FetchTodosPendingAction = () => ({
  type: ActionTypes.FETCH_TODOS_PENDING,
});

export const fetchTodosFulfilled: (todos: NormalizedTodoList) => FetchTodosFulfilledAction =
  todos => ({
    type: ActionTypes.FETCH_TODOS_FULFILLED,
    payload: todos,
  });

export const fetchTodosRejected: (error: Error) => FetchTodosRejectedAction = error => ({
  type: ActionTypes.FETCH_TODOS_REJECTED,
  payload: error,
  error: true,
});
