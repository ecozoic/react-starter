import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';
import { Store } from 'redux';

import { Action, fetchTodosFulfilled, fetchTodosPending, fetchTodosRejected } from '../actions';
import { getTodos } from '../api';
import { ActionTypes } from '../constants';
import { State } from '../reducers';

export const fetchTodosEpic = (action$: ActionsObservable<Action<any, any>>, store: Store<State>) =>
  action$
    .ofType(ActionTypes.FETCH_TODOS)
    .do(() => store.dispatch(fetchTodosPending()))
    .mergeMap(() =>
      getTodos()
        .map(todos => fetchTodosFulfilled(todos))
        .catch(error => Observable.of(fetchTodosRejected(error))),
    );
