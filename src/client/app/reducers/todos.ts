import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS_FULFILLED } from '../constants';
import { Todo } from '../models';
import { AddTodoAction, ToggleTodoAction, FetchTodosFulfilledAction } from '../actions';

type TodosAction = AddTodoAction | ToggleTodoAction | FetchTodosFulfilledAction;

export const INITIAL_STATE: Todo[] = [];

let nextTodoId = 0;

const todoFactory: (text: string) => Todo = text => ({
  // tslint:disable-next-line:no-increment-decrement
  id: nextTodoId++,
  text,
  completed: false,
});

export const todosReducer = (todos: Todo[] = INITIAL_STATE, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        todoFactory(action.payload.text),
      ];
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case FETCH_TODOS_FULFILLED:
      return [
        ...todos,
        ...action.payload.map(todo => todoFactory(todo)),
      ];
    default:
      return todos;
  }
};
