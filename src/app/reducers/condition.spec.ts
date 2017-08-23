import deepFreeze from 'deep-freeze';
import { Action } from 'redux';

import { conditionReducer, INITIAL_STATE } from './condition';

describe('conditionReducer', () => {
  it('returns initial state', () => {
    const action: Action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const nextState = conditionReducer(undefined, action);

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action: Action = {
      type: '@@UNKNOWN',
    };

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = conditionReducer(prevState, action);

    expect(nextState).toBe(prevState);
  });
});
