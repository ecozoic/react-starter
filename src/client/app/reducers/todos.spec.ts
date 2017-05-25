import * as deepFreeze from 'deep-freeze';
import { Action } from 'redux';

import { ADD_TODO, TOGGLE_TODO } from '../constants';
import { Todo } from '../models';
import { AddTodoAction, ToggleTodoAction } from '../actions';

import {
  todosReducer,
  INITIAL_STATE,
} from './todos';

describe('todosReducer', () => {
  it('adds a new todo', () => {
    const action1: AddTodoAction = {
      type: ADD_TODO,
      payload: {
        id: 1,
        text: 'Todo 1',
      },
    };

    const action2: AddTodoAction = {
      type: ADD_TODO,
      payload: {
        id: 2,
        text: 'Todo 2',
      },
    };

    const todosBefore: Todo[] = [];

    deepFreeze(action1);
    deepFreeze(action2);
    deepFreeze(todosBefore);

    let todosAfter = todosReducer(todosBefore, action1);
    expect(todosAfter.length).toEqual(1);
    expect(todosAfter[0].id).toEqual(action1.payload.id);

    todosAfter = todosReducer(todosAfter, action2);
    expect(todosAfter.length).toEqual(2);
    expect(todosAfter[1].id).toEqual(action2.payload.id);
  });

  it('toggles an existing todo', () => {
    const action: ToggleTodoAction = {
      type: TOGGLE_TODO,
      payload: {
        id: 1,
      },
    };

    const todosBefore: Todo[] = [{
      id: 1,
      text: 'Todo',
      completed: false,
    }];

    deepFreeze(action);
    deepFreeze(todosBefore);

    let todosAfter = todosReducer(todosBefore, action);
    expect(todosAfter.length).toEqual(1);
    expect(todosAfter[0].completed).toEqual(true);

    todosAfter = todosReducer(todosAfter, action);
    expect(todosAfter.length).toEqual(1);
    expect(todosAfter[0].completed).toEqual(false);
  });

  it('returns initial state', () => {
    const action: Action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const todos = todosReducer(undefined, action);

    expect(todos).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action: Action = {
      type: '@@UNKNOWN',
    };

    const todos: Todo[] = [];

    deepFreeze(action);
    deepFreeze(todos);

    expect(todosReducer(todos, action)).toBe(todos);
  });
});
