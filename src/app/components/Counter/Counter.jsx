// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

type Props = {
  +count: number,
  +onIncrement: Function,
  +onDecrement: Function,
};

/**
 * Component to render a counter
 * @param {Props} props
 * @param {Number} props.count - the current counter value
 * @param {Function} props.onIncrement - function to call when increment button is clicked
 * @param {Function} props.onDecrement - function to call when decrement button is clicked
 */
export const Counter = ({ count, onIncrement, onDecrement }: Props) => (
  <div>
    <div>{count}</div>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
    <div>
      <Link to="/admin">ADMIN AREA</Link>
    </div>
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
