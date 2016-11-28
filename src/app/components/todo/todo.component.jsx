import React, { PropTypes, Component } from 'react';

import styles from './todo.component.scss';

export class Todo extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { onClick, completed, text } = this.props;

    return (
      <li
        className={styles.todo}
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
  }
}
