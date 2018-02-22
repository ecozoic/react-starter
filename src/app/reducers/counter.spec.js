import counter from './counter';

describe('counter', () => {
  it('increments', () => {
    const prev = { count: 0 };
    const next = counter(prev, { type: 'INCREMENT' });

    expect(next.count).toEqual(prev.count + 1);
  });

  it('decrements', () => {
    const prev = { count: 0 };
    const next = counter(prev, { type: 'DECREMENT' });

    expect(next.count).toEqual(prev.count - 1);
  });
});
