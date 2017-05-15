import { getTodos } from './';

describe('getTodos', () => {
  it('returns todos from state', () => {
    const todos = [];
    const state = {
      todos,
    };

    expect(getTodos(state)).toBe(todos);
  });
});
