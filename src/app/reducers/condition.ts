type ConditionAction = any;

export interface ConditionState {
  readonly conditions: string[];
}

export const INITIAL_STATE: ConditionState = {
  conditions: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ],
};

export const conditionReducer =
  (prevState: ConditionState = INITIAL_STATE, action: ConditionAction) => {
    switch (action.type) {
      default:
        return prevState;
    }
  };
