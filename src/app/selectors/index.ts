import { createSelector } from 'reselect';
import jsep from 'jsep';

import { QuerySegmentTypes, JsepOperatorMap } from '../constants';
import { State } from '../reducers';

export const getConditions = (state: State) => state.condition.conditions;

export const getQuery = (state: State) => state.expression.query;

export const getQueryAsString = createSelector(
  getQuery,
  (query) => {
    return query.map((querySegment) => {
      if (querySegment.type === QuerySegmentTypes.OPERATOR) {
        return JsepOperatorMap[querySegment.value];
      }

      return querySegment.value;
    }).join(' ');
  },
);

export const getQueryAsExpr = createSelector(
  getQueryAsString,
  (queryAsString) => {
    return jsep(queryAsString);
  },
);
