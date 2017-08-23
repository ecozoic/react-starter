type ExpressionAction = any;

export interface ExpressionState {}

export const INITIAL_STATE: ExpressionState = {};

export const expressionReducer =
  (prevState: ExpressionState = INITIAL_STATE, action: ExpressionAction) => {
    switch (action.type) {
      default:
        return prevState;
    }
  };
