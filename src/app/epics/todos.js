import { Observable } from 'rxjs/Observable';

import { fetchTodosFulfilled, fetchTodosPending, fetchTodosRejected } from '../actions';
import { getTodos } from '../api';
import { ActionTypes } from '../constants';

export const fetchTodosEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.FETCH_TODOS)
    .do(() => store.dispatch(fetchTodosPending()))
    .mergeMap(() =>
      getTodos()
        .map(todos => fetchTodosFulfilled(todos))
        .catch(error => Observable.of(fetchTodosRejected(error))),
    );
