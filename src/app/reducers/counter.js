// @flow

type State = {
  +count: number;
};

type Action =
  | { +type: 'INCREMENT' }
  | { +type: 'DECREMENT' };

const counter = (prevState: State = { count: 0 }, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: prevState.count + 1,
      };
    case 'DECREMENT':
      return {
        count: prevState.count - 1,
      };
    default:
      return prevState;
  }
};

export default counter;
