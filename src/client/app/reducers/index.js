/* @flow */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { intlReducer as intl } from 'react-intl-redux';

import { todosReducer as todos } from './todos';

/**
 * Root reducer
 */
const rootReducer = combineReducers({
  todos,
  form,
  intl,
});

export default rootReducer;
