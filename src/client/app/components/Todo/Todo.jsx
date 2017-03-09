/* @flow */
import React, { PropTypes } from 'react';
import Radium from 'radium';

const styles = {
  todo: {
    fontSize: '18px',
    userSelect: 'none',
  },
  completed: {
    textDecoration: 'line-through',
  },
};

function Todo({ onClick, completed, text }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <li
      style={[
        styles.todo,
        completed && styles.completed,
      ]}
      onClick={onClick}
    >
      {text}
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Radium(Todo);
