/* @flow */
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { intlReducer } from 'react-intl-redux';

import { todos } from './todos';

/**
 * Root reducer
 */
const rootReducer = combineReducers({
  todos,
  form,
  intl: intlReducer,
});

export default rootReducer;
