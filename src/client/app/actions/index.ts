import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from '../constants';

const { fetch } = window;

let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    // tslint:disable-next-line:no-increment-decrement
    id: nextTodoId++,
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const fetchTodos = () => (dispatch: Function) => dispatch({
  type: FETCH_TODOS,
  payload: fetch('/api/todos')
    .then((response) => response.json())
    .then((todos: string[]) => {
      todos.forEach((todo) => dispatch(addTodo(todo)));
    }),
});
