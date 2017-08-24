import _ from 'lodash';

import {
  AddQueryConditionAction,
  ToggleOperatorAction,
  ToggleConditionPrefixAction,
} from '../actions';
import { ActionTypes, Operators, Prefixes, QuerySegmentTypes } from '../constants';
import { QuerySegment } from '../models';

type ExpressionAction =
  AddQueryConditionAction |
  ToggleOperatorAction |
  ToggleConditionPrefixAction;

export interface ExpressionState {
  readonly query: QuerySegment[];
}

export const INITIAL_STATE: ExpressionState = {
  query: [],
};

export const expressionReducer =
  (prevState: ExpressionState = INITIAL_STATE, action: ExpressionAction) => {
    switch (action.type) {
      case ActionTypes.ADD_QUERY_CONDITION:
        if (prevState.query.length === 0) {
          return {
            ...prevState,
            query: [action.payload],
          };
        }

        return {
          ...prevState,
          query: [
            ...prevState.query,
            {
              id: _.uniqueId(),
              value: Operators.AND,
              type: QuerySegmentTypes.OPERATOR,
            },
            action.payload,
          ],
        };
      case ActionTypes.TOGGLE_OPERATOR:
        return {
          ...prevState,
          query: prevState.query.map((querySegment) => {
            if (
              querySegment.type === QuerySegmentTypes.OPERATOR &&
              querySegment.id === action.payload.operatorId
            ) {
              return {
                ...querySegment,
                value: querySegment.value === Operators.AND ? Operators.OR : Operators.AND,
              };
            }

            return querySegment;
          }),
        };
      case ActionTypes.TOGGLE_CONDITION_PREFIX:
        return {
          ...prevState,
          query: prevState.query.map((querySegment) => {
            if (
              querySegment.type === QuerySegmentTypes.CONDITION &&
              querySegment.id === action.payload.conditionId
            ) {
              return {
                ...querySegment,
                prefix: querySegment.prefix === Prefixes.NOT ? undefined : Prefixes.NOT,
              };
            }

            return querySegment;
          }),
        };
      default:
        return prevState;
    }
  };
