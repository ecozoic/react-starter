export const INITIAL_STATE = {
  message: 'Hello from Redux!',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
