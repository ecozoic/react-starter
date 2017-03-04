/* @flow */
import * as t from '../constants';

export const todo = (state = {}, action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case t.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    case t.TOGGLE_TODO:
      return state.map(td => todo(td, action));
    default:
      return state;
  }
};
