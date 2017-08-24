import { createSelector } from 'reselect';
import jsep from 'jsep';

import { State } from '../reducers';

export const getConditions = (state: State) => state.condition.conditions;

export const getQueryConditions = (state: State) => state.expression.conditions;

export const getQueryAsString = createSelector(
  getQueryConditions,
  (conditions) => {
    return conditions.join(` && `);
  },
);

export const getQueryAsExpr = createSelector(
  getQueryAsString,
  (queryAsString) => {
    return jsep(queryAsString);
  },
);
