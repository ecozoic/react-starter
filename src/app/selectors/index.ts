import { State } from '../reducers';

export const getConditions = (state: State) => state.condition.conditions;
