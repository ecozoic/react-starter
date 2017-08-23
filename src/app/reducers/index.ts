import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';

import { conditionReducer as condition, ConditionState } from './condition';
import { expressionReducer as expression, ExpressionState } from './expression';

const rootReducer = combineReducers<State>({
  condition,
  expression,
});

export interface State {
  readonly router?: RouterState;
  readonly condition?: ConditionState;
  readonly expression?: ExpressionState;
}

export const INITIAL_STATE: State = {};

export default rootReducer;
