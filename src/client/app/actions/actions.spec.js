import {
  addTodo,
  toggleTodo,
  fetchingTodos,
  fetchedTodos,
} from './';

import * as t from '../constants';

describe('addTodo', () => {
  it('creates a valid action', () => {
    const action = addTodo('Todo');

    expect(action.type).toEqual(t.ADD_TODO);
    expect(action.text).toEqual('Todo');
    expect(action.id).toEqual(expect.any(Number));
  });

  it('increments id', () => {
    const action1 = addTodo('Todo 1');
    const action2 = addTodo('Todo 2');

    expect(action2.id - action1.id).toEqual(1);
  });
});

describe('toggleTodo', () => {
  it('creates a valid action', () => {
    const action = toggleTodo(1);

    expect(action.type).toEqual(t.TOGGLE_TODO);
    expect(action.id).toEqual(1);
  });
});

describe('fetchingTodos', () => {
  it('creates a valid action', () => {
    const action = fetchingTodos();

    expect(action.type).toEqual(t.FETCHING_TODOS);
  });
});

describe('fetchedTodos', () => {
  it('creates a valid action', () => {
    const todos = [];
    const action = fetchedTodos(todos);

    expect(action.type).toEqual(t.FETCHED_TODOS);
    expect(action.todos).toBe(todos);
  });
});

describe('fetchTodos', () => {
  // TODO
});
