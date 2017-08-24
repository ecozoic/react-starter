export enum ActionTypes {
  ADD_QUERY_CONDITION = 'ADD_QUERY_CONDITION',
  TOGGLE_OPERATOR = 'TOGGLE_OPERATOR',
}

export enum DndTypes {
  CONDITION = 'CONDITION',
}

export enum Operators {
  AND = 'AND',
  OR = 'OR',
}

export const JsepOperatorMap = {
  [Operators.AND]: '&&',
  [Operators.OR]: '||',
};

export enum QuerySegmentTypes {
  OPERATOR = 'OPERATOR',
  CONDITION = 'CONDITION',
  PREFIX = 'PREFIX',
  GROUP = 'GROUP',
}
