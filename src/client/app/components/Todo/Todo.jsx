/* @flow */
import React, { PropTypes } from 'react';

import styles from './Todo.scss';

function Todo({ onClick, completed, text }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <li
      className={styles.todo}
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
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

export default Todo;
