const counter = (prevState = { count: 0 }, action) => {
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
