import { Action as ReduxAction, Dispatch } from 'redux';
import { State } from '../reducers';

import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from '../constants';

const { fetch } = window;
let nextTodoId = 0;

export interface Action<P, M> extends ReduxAction {
  readonly type: string;
  readonly payload?: P;
  readonly meta?: M;
  readonly error?: boolean;
}

export interface AddTodoPayload {
  readonly id: number;
  readonly text: string;
}

export interface ToggleTodoPayload {
  readonly id: number;
}

export interface AddTodoAction extends Action<AddTodoPayload, undefined>  {
  type: ADD_TODO;
}

export interface ToggleTodoAction extends Action<ToggleTodoPayload, undefined> {
  type: TOGGLE_TODO;
}

export const addTodo: (text: string) => AddTodoAction = (text: string) => ({
  type: ADD_TODO,
  payload: {
    // tslint:disable-next-line:no-increment-decrement
    id: nextTodoId++,
    text,
  },
});

export const toggleTodo: (id: number) => ToggleTodoAction = (id: number) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const fetchTodos = () => (dispatch: Dispatch<State>) => dispatch({
  type: FETCH_TODOS,
  payload: fetch('/api/todos')
    .then(response => response.json())
    .then((todos: string[]) => {
      todos.forEach(todo => dispatch(addTodo(todo)));
    }),
});
