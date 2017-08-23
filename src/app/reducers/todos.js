import { ActionTypes } from '../constants/index';

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
};

export const todosReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
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
    case ActionTypes.TOGGLE_TODO:
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
    case ActionTypes.FETCH_TODOS_FULFILLED:
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
