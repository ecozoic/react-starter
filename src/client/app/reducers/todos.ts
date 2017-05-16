import { ADD_TODO, TOGGLE_TODO } from '../constants';
import { Todo } from '../models';
import { AddTodoAction, ToggleTodoAction } from '../actions';

type TodosAction = AddTodoAction | ToggleTodoAction;

export const todoReducer = (todo: Todo, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (todo.id !== action.payload.id) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed,
      };
    default:
      return todo;
  }
};

export const todosReducer = (todos: Todo[] = [], action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        todoReducer(undefined, action),
      ];
    case TOGGLE_TODO:
      return todos.map((td) => todoReducer(td, action));
    default:
      return todos;
  }
};
