import { Observable } from 'rxjs';

import { Action, fetchTodosFulfilled } from '../actions';
import { getTodos } from '../api';
import { FETCH_TODOS } from '../constants';

export const fetchTodosEpic = (action$: Observable<Action<any, any>>) =>
  action$
    .filter(action => action.type === FETCH_TODOS)
    .mergeMap(() => getTodos())
    .map(todos => fetchTodosFulfilled(todos));
