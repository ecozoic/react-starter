import { ADD_TODO, TOGGLE_TODO } from '../constants';
import { Todo } from '../models';
import { AddTodoAction, ToggleTodoAction } from '../actions';

type TodosAction = AddTodoAction | ToggleTodoAction;

export const INITIAL_STATE: Todo[] = [];

export const todosReducer = (todos: Todo[] = INITIAL_STATE, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
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
    default:
      return todos;
  }
};
