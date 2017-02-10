/* @flow */
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import { todos } from './todos';

/**
 * Root reducer
 */
export const rootReducer = combineReducers({
  todos,
  form
});
