// @flow

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

type Props = {
  +count: number,
  +onIncrement: Function,
  +onDecrement: Function,
};

export const Counter = ({ count, onIncrement, onDecrement }: Props) => (
  <div>
    <div>{count}</div>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default connect(
  state => ({ count: state.counter.count }),
  dispatch => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
  }),
)(Counter);
