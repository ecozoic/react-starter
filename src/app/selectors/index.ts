import { State } from '../reducers';

export const getConditions = (state: State) => state.condition.conditions;

export const getQueryConditions = (state: State) => state.expression.conditions;
