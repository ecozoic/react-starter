import { isFSA } from 'flux-standard-action';

import { ADD_TODO, TOGGLE_TODO } from '../constants';

import {
  addTodo,
  toggleTodo,
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
