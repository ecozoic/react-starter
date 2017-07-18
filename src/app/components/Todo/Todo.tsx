import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = require('./Todo.scss');

export interface TodoProps {
  onClick: React.EventHandler<React.MouseEvent<HTMLLIElement>>;
  completed: boolean;
  text: string;
}

const Todo: React.SFC<TodoProps> = ({ onClick, completed, text }) => {
  const className = classNames(
    styles.todo,
    { [styles.completed]: completed },
  );

  return (
    <li
      className={className}
      onClick={onClick}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
