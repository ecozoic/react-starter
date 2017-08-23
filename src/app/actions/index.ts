import { Action as ReduxAction } from 'redux';

import { ActionTypes } from '../constants';

export interface Action<P = undefined, M = undefined> extends ReduxAction {
  readonly type: string;
  readonly payload?: P;
  readonly meta?: M;
  readonly error?: boolean;
}

export interface AddQueryConditionAction extends Action<{ readonly condition: string }> {
  readonly type: ActionTypes.ADD_QUERY_CONDITION;
}

export const addQueryCondition = (condition: string): AddQueryConditionAction => ({
  type: ActionTypes.ADD_QUERY_CONDITION,
  payload: {
    condition,
  },
});
