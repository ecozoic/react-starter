import { isFSA } from 'flux-standard-action';

import { ADD_TODO, TOGGLE_TODO } from '../constants';

import {
  addTodo,
  toggleTodo,
} from './';

describe('addTodo', () => {
  it('creates a valid action', () => {
    const action = addTodo('Todo');

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ADD_TODO);
    expect(action.payload.text).toEqual('Todo');
    expect(action.payload.id).toEqual(expect.any(Number));
  });
});

describe('toggleTodo', () => {
  it('creates a valid action', () => {
    const action = toggleTodo(1);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(TOGGLE_TODO);
    expect(action.payload.id).toEqual(1);
  });
});
