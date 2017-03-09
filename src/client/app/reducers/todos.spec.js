import deepFreeze from 'deep-freeze';

import * as t from '../constants';

import {
  todoReducer,
  todosReducer,
} from './todos';

describe('todoReducer', () => {
  it('adds a new todo', () => {
    const action = {
      type: t.ADD_TODO,
      id: 1,
      text: 'Todo',
    };

    const todoBefore = {};

    deepFreeze(todoBefore);
    deepFreeze(action);

    const todoAfter = todoReducer(todoBefore, action);

    expect(todoAfter).toEqual({
      id: action.id,
      text: action.text,
      completed: false,
    });
  });

  it('toggles an existing todo', () => {
    const action = {
      type: t.TOGGLE_TODO,
      id: 1,
    };

    const todoBefore = {
      id: 1,
      completed: false,
    };

    deepFreeze(action);
    deepFreeze(todoBefore);

    let todoAfter = todoReducer(todoBefore, action);
    expect(todoAfter.completed).toEqual(true);

    deepFreeze(todoAfter);

    todoAfter = todoReducer(todoAfter, action);
    expect(todoAfter.completed).toEqual(false);
  });

  it('returns unchanged todo if toggle action has wrong id', () => {
    const action = {
      type: t.TOGGLE_TODO,
      id: 0,
    };

    const todoBefore = {
      id: 1,
      completed: false,
    };

    deepFreeze(action);
    deepFreeze(todoBefore);

    const todoAfter = todoReducer(todoBefore, action);
    expect(todoAfter).toBe(todoBefore);
  });

  it('returns initial state', () => {
    const action = {};

    deepFreeze(action);

    const todo = todoReducer(undefined, action);
    expect(todo).toEqual({});
  });

  it('returns existing state for unknown action', () => {
    const action = {
      type: 'NOPE',
    };

    const todo = {};

    deepFreeze(action);
    deepFreeze(todo);

    expect(todoReducer(todo, action)).toBe(todo);
  });
});

describe('todosReducer', () => {
  it('adds a new todo', () => {
    const action1 = {
      type: t.ADD_TODO,
      id: 1,
      text: 'Todo',
    };

    const action2 = {
      ...action1,
      id: 2,
    };

    const todosBefore = [];

    deepFreeze(action1);
    deepFreeze(action2);
    deepFreeze(todosBefore);

    let todosAfter = todosReducer(todosBefore, action1);
    expect(todosAfter.length).toEqual(1);
    expect(todosAfter[0].id).toEqual(action1.id);

    todosAfter = todosReducer(todosAfter, action2);
    expect(todosAfter.length).toEqual(2);
    expect(todosAfter[1].id).toEqual(action2.id);
  });

  it('toggles an existing todo', () => {
    const action = {
      type: t.TOGGLE_TODO,
      id: 1,
    };

    const todosBefore = [{
      id: 1,
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
    const action = {};

    deepFreeze(action);

    const todos = todosReducer(undefined, action);

    expect(todos).toEqual([]);
  });

  it('returns existing state for unknown action', () => {
    const action = {
      type: 'NOPE',
    };

    const todos = [];

    deepFreeze(action);
    deepFreeze(todos);

    expect(todosReducer(todos, action)).toBe(todos);
  });
});
