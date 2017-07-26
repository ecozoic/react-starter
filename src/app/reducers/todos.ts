import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS_FULFILLED } from '../constants';
import { Todo } from '../models';
import { AddTodoAction, ToggleTodoAction, FetchTodosFulfilledAction } from '../actions';

type TodosAction = AddTodoAction | ToggleTodoAction | FetchTodosFulfilledAction;

export interface TodosState {
  byId: {
    [id: string]: Todo;
  };
  allIds: string[];
}

export const INITIAL_STATE: TodosState = {
  byId: {},
  allIds: [],
};

export const todosReducer = (prevState: TodosState = INITIAL_STATE, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          [action.payload.id]: action.payload,
        },
        allIds: [
          ...prevState.allIds,
          action.payload.id,
        ],
      };
    case TOGGLE_TODO:
      if (!prevState.byId[action.payload.id]) {
        return prevState;
      }

      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          [action.payload.id]: {
            ...prevState.byId[action.payload.id],
            completed: !prevState.byId[action.payload.id].completed,
          },
        },
      };
    case FETCH_TODOS_FULFILLED:
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...action.payload.entities.todos,
        },
        allIds: [
          ...prevState.allIds,
          ...action.payload.result,
        ],
      };
    default:
      return prevState;
  }
};
