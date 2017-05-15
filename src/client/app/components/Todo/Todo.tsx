import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Todo.scss';

function Todo({ onClick, completed, text }) {
  return (
    <li
      className={classNames(styles.todo, { [styles.completed]: completed })}
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

export default Todo;
