/* @flow */
import * as Immutable from 'immutable';

import * as t from '../constants';

export const todo = (state = Immutable.Map(), action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return Immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false
      });
    case t.TOGGLE_TODO:
      if (state.get('id') !== action.id) {
        return state;
      }

      return state.set('completed', !state.get('completed'));

    default:
      return state;
  }
};

export const todos = (state = Immutable.List(), action) => {
  switch (action.type) {
    case t.ADD_TODO:
      return state.push(todo(undefined, action));
    case t.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};
