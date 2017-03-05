/* @flow */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './Todo.scss';

function Todo({ onClick, completed, text }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <li
      className={classNames(
        'Todo', {
          'Todo--completed': completed,
        },
      )}
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
