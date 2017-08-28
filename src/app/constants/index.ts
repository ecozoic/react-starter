export enum ActionTypes {
  ADD_QUERY_CONDITION = 'ADD_QUERY_CONDITION',
  TOGGLE_OPERATOR = 'TOGGLE_OPERATOR',
  TOGGLE_CONDITION_PREFIX = 'TOGGLE_CONDITION_PREFIX',
  MOVE_QUERY_CONDITION = 'MOVE_QUERY_CONDITION',
}

export enum DndTypes {
  CONDITION = 'CONDITION', // adding a new condition
  QUERY_CONDITION = 'QUERY_CONDITION', // moving existing condition
}

export enum Operators {
  AND = 'AND',
  OR = 'OR',
}

export enum Prefixes {
  NOT = 'NOT',
}

export const JsepOperatorMap = {
  [Operators.AND]: '&&',
  [Operators.OR]: '||',
};

export const JsepPrefixMap = {
  [Prefixes.NOT]: '!',
};

export enum QuerySegmentTypes {
  OPERATOR = 'OPERATOR',
  CONDITION = 'CONDITION',
  GROUP = 'GROUP',
}
