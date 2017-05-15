import { getTodos } from './';

describe('getTodos', () => {
  it('returns todos from state', () => {
    const todos: any[] = [];
    const state = {
      todos,
    };

    expect(getTodos(state)).toBe(todos);
  });
});
