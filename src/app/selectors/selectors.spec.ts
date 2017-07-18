import { getTodos } from './';
import { Todo } from '../models';

describe('getTodos', () => {
  it('returns todos from state', () => {
    const todos: Todo[] = [];
    const state = {
      todos,
    };

    expect(getTodos(state)).toBe(todos);
  });
});
