import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';

const dndReducer = (prevState: any = {}, action: any) => {
  return prevState;
};

const rootReducer = combineReducers<State>({
  dnd: dndReducer,
});

export interface State {
  readonly router?: RouterState;
}

export const INITIAL_STATE: State = {};

export default rootReducer;
