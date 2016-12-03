/* @flow */
import { combineReducers } from 'redux';
import { todos } from './todos';

/**
 * Root reducer
 */
export const rootReducer = combineReducers({
  todos
});
