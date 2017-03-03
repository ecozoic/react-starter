/* @flow */
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { intlReducer as intl } from 'react-intl-redux';

import { todos } from './todos';

/**
 * Root reducer
 */
const rootReducer = combineReducers({
  todos,
  form,
  intl,
});

export default rootReducer;
