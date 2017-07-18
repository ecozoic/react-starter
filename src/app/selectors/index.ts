import { State } from '../reducers';

export const getTodos = (state: State) => state.todos;

export const getPending = (state: State) => state.appStatus.pending;
export const getInitialized = (state: State) => state.appStatus.initialized;
export const getError = (state: State) => state.appStatus.error;
