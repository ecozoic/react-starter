import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

const styles = require('./Todo.scss');

export interface TodoProps {
  onClick: React.EventHandler<React.MouseEvent<HTMLLIElement>>;
  completed: boolean;
  text: string;
}

class Todo extends React.Component<TodoProps, undefined> {
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
