import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchTodosPending,
  fetchTodosFulfilled,
  fetchTodosRejected,
} from '../actions';

import { getTodos } from '../api';

import { FETCH_TODOS } from '../constants';

function* fetchTodos() {
  yield put(fetchTodosPending());

  try {
    const todos: string[] = yield call(getTodos);
    yield put(fetchTodosFulfilled(todos));
  } catch (e) {
    yield put(fetchTodosRejected(e));
  }
}

function* fetchTodosSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodos);
}

export default fetchTodosSaga;
