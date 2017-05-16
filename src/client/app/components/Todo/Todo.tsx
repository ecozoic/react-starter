import React, { Component, EventHandler, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Todo.scss';

interface TodoProps {
  onClick: EventHandler<MouseEvent<HTMLLIElement>>;
  completed: boolean;
  text: string;
}

class Todo extends Component<TodoProps, undefined> {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { onClick, completed, text } = this.props;
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
  }
}

export default Todo;
