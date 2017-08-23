import deepFreeze from 'deep-freeze';
import { Action } from 'redux';

import { expressionReducer, INITIAL_STATE } from './expression';

describe('expressionReducer', () => {
  it('returns initial state', () => {
    const action: Action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const nextState = expressionReducer(undefined, action);

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action: Action = {
      type: '@@UNKNOWN',
    };

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = expressionReducer(prevState, action);

    expect(nextState).toBe(prevState);
  });
});
