/* @flow */
import { List, Map } from 'immutable';

import * as t from '../constants';

export const todo = (state = Map(), action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return Map({
        id: action.id,
        text: action.text,
        completed: false,
      });
    case t.TOGGLE_TODO:
      if (state.get('id') !== action.id) {
        return state;
      }

      return state.update('completed', completed => !completed);
    default:
      return state;
  }
};

export const todos = (state = List(), action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return state.push(todo(undefined, action));
    case t.TOGGLE_TODO:
      return state.map(td => todo(td, action));
    default:
      return state;
  }
};
