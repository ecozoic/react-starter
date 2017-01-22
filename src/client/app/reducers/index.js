/* @flow */
import { combineReducers } from 'redux-immutable';
import { todos } from './todos';

/**
 * Root reducer
 */
export const rootReducer = combineReducers({
  todos
});
