import {
  addTodo,
  toggleTodo,
} from './';

import { ADD_TODO, TOGGLE_TODO } from '../constants';

describe('addTodo', () => {
  it('creates a valid action', () => {
    const action = addTodo('Todo');

    expect(action.type).toEqual(ADD_TODO);
    expect(action.payload.text).toEqual('Todo');
    expect(action.payload.id).toEqual(expect.any(Number));
  });
});

describe('toggleTodo', () => {
  it('creates a valid action', () => {
    const action = toggleTodo(1);

    expect(action.type).toEqual(TOGGLE_TODO);
    expect(action.payload.id).toEqual(1);
  });
});

describe('fetchTodos', () => {
  // TODO
});
