import { Observable } from 'rxjs/Observable';

import { fetchTodosFulfilled, fetchTodosPending, fetchTodosRejected } from '../actions/index';
import { getTodos } from '../api/index';
import { ActionTypes } from '../constants/index';

export const fetchTodosEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.FETCH_TODOS)
    .do(() => store.dispatch(fetchTodosPending()))
    .mergeMap(() =>
      getTodos()
        .map(todos => fetchTodosFulfilled(todos))
        .catch(error => Observable.of(fetchTodosRejected(error))),
    );
