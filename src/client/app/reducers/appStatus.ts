import {
  FetchTodosPendingAction,
  FetchTodosRejectedAction,
  FetchTodosFulfilledAction,
} from '../actions';

import {
  FETCH_TODOS_PENDING,
  FETCH_TODOS_REJECTED,
  FETCH_TODOS_FULFILLED,
} from '../constants';

type AppStatusAction = FetchTodosFulfilledAction |
                       FetchTodosPendingAction |
                       FetchTodosRejectedAction;

export interface AppStatusState {
  initialized: boolean;
  pending: boolean;
  error: boolean | Error;
}

export const INITIAL_STATE: AppStatusState = {
  initialized: false,
  pending: false,
  error: false,
};

export const appStatusReducer = (appStatus = INITIAL_STATE, action: AppStatusAction) => {
  switch (action.type) {
    case FETCH_TODOS_PENDING:
      return {
        initialized: false,
        pending: true,
        error: false,
      };
    case FETCH_TODOS_FULFILLED:
      return {
        initialized: true,
        pending: false,
        error: false,
      };
    case FETCH_TODOS_REJECTED:
      return {
        initialized: true,
        pending: false,
        error: action.payload,
      };
    default:
      return appStatus;
  }
};
