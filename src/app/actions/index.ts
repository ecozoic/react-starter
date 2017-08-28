import { Action as ReduxAction } from 'redux';
import _ from 'lodash';

import { ActionTypes, QuerySegmentTypes } from '../constants';
import { QuerySegment } from '../models';

export interface Action<P = undefined, M = undefined> extends ReduxAction {
  readonly type: string;
  readonly payload?: P;
  readonly meta?: M;
  readonly error?: boolean;
}

export interface AddQueryConditionAction extends Action<QuerySegment> {
  readonly type: ActionTypes.ADD_QUERY_CONDITION;
}

export const addQueryCondition = (condition: string): AddQueryConditionAction => ({
  type: ActionTypes.ADD_QUERY_CONDITION,
  payload: {
    id: _.uniqueId(),
    value: condition,
    type: QuerySegmentTypes.CONDITION,
  },
});

export interface ToggleOperatorAction extends Action<{ readonly operatorId: string}> {
  readonly type: ActionTypes.TOGGLE_OPERATOR;
}

export const toggleOperator = (operatorId: string): ToggleOperatorAction => ({
  type: ActionTypes.TOGGLE_OPERATOR,
  payload: {
    operatorId,
  },
});

export interface ToggleConditionPrefixAction extends Action<{ readonly conditionId: string}> {
  readonly type: ActionTypes.TOGGLE_CONDITION_PREFIX;
}

export const toggleConditionPrefix = (conditionId: string): ToggleConditionPrefixAction => ({
  type: ActionTypes.TOGGLE_CONDITION_PREFIX,
  payload: {
    conditionId,
  },
});

export interface MoveQueryConditionPayload {
  readonly conditionId: string;
  readonly nextIndex: number;
}

export interface MoveQueryConditionAction extends Action<MoveQueryConditionPayload> {
  readonly type: ActionTypes.MOVE_QUERY_CONDITION;
}

export const moveQueryCondition =
  (conditionId: string, nextIndex: number): MoveQueryConditionAction => ({
    type: ActionTypes.MOVE_QUERY_CONDITION,
    payload: {
      conditionId,
      nextIndex,
    },
  });
