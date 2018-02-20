import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <div>{count}</div>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

export default connect(
  state => ({ count: state.counter.count }),
  dispatch => {
    return {
      onIncrement: () => dispatch({ type: 'INCREMENT' }),
      onDecrement: () => dispatch({ type: 'DECREMENT' }),
    };
  },
)(Counter);
