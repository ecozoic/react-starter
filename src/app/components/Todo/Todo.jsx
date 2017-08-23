import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Todo.scss';

const Todo = ({ onClick, completed, text }) => {
  const className = classNames(
    styles.todo,
    { [styles.completed]: completed },
  );

  return (
    <li
      className={className}
      onClick={onClick}
    >
      {text}!!
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
