import { AddQueryConditionAction } from '../actions';
import { ActionTypes } from '../constants';

type ExpressionAction = AddQueryConditionAction;

export interface ExpressionState {
  readonly conditions: string[];
}

export const INITIAL_STATE: ExpressionState = {
  conditions: [],
};

export const expressionReducer =
  (prevState: ExpressionState = INITIAL_STATE, action: ExpressionAction) => {
    switch (action.type) {
      case ActionTypes.ADD_QUERY_CONDITION:
        return {
          ...prevState,
          conditions: [
            ...prevState.conditions,
            action.payload.condition,
          ],
        };
      default:
        return prevState;
    }
  };
