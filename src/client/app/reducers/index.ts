import { combineReducers } from 'redux';
import { reducer as form, FormStateMap } from 'redux-form';
import { intlReducer as intl, IntlState } from 'react-intl-redux';

import { todosReducer as todos } from './todos';
import { Todo } from '../models';

/**
 * Root reducer
 */
const rootReducer = combineReducers<State>({
  todos,
  form,
  intl,
});

export interface State {
  form: FormStateMap;
  intl: IntlState;
  todos: Todo[];
}

export default rootReducer;
