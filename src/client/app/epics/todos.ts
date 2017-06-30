import { Observable } from 'rxjs';
import { Store } from 'redux';

import { Action, fetchTodosFulfilled, fetchTodosPending, fetchTodosRejected } from '../actions';
import { getTodos } from '../api';
import { FETCH_TODOS } from '../constants';
import { State } from '../reducers';

export const fetchTodosEpic = (action$: Observable<Action<any, any>>, store: Store<State>) =>
  action$
    .filter(action => action.type === FETCH_TODOS)
    .do(() => store.dispatch(fetchTodosPending()))
    .mergeMap(() =>
      getTodos()
        .map(todos => fetchTodosFulfilled(todos))
        .catch(error => Observable.of(fetchTodosRejected(error))),
    );
