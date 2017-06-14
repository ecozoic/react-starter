import { isFSA } from 'flux-standard-action';

import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS,
  FETCH_TODOS_PENDING,
  FETCH_TODOS_FULFILLED,
  FETCH_TODOS_REJECTED,
} from '../constants';

import {
  addTodo,
  toggleTodo,
  fetchTodos,
  fetchTodosPending,
  fetchTodosFulfilled,
  fetchTodosRejected,
} from './';

describe('addTodo', () => {
  it('creates a valid action', () => {
    const text = 'Todo';
    const action = addTodo(text);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ADD_TODO);
    expect(action.payload.text).toEqual(text);
  });
});

describe('toggleTodo', () => {
  it('creates a valid action', () => {
    const id = 1;
    const action = toggleTodo(id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(TOGGLE_TODO);
    expect(action.payload.id).toEqual(id);
  });
});

describe('fetchTodos', () => {
  it('creates a valid action', () => {
    const action = fetchTodos();

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(FETCH_TODOS);
  });
});

describe('fetchTodosPending', () => {
  it('creates a valid action', () => {
    const action = fetchTodosPending();

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(FETCH_TODOS_PENDING);
  });
});

describe('fetchTodosFulfilled', () => {
  it('creates a valid action', () => {
    const todos = ['foo', 'bar'];
    const action = fetchTodosFulfilled(todos);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(FETCH_TODOS_FULFILLED);
    expect(action.payload).toEqual(todos);
  });
});

describe('fetchTodosRejected', () => {
  it('creates a valid action', () => {
    const error = new Error('error');
    const action = fetchTodosRejected(error);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(FETCH_TODOS_REJECTED);
    expect(action.payload).toEqual(error);
    expect(action.error).toEqual(true);
  });
});
