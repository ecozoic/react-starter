/* @flow */
import React, { PropTypes, Component } from 'react';

import { Todo } from '../todo';
import styles from './todo-list.scss';

export class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  render() {
    const { todos, onTodoClick } = this.props;

    return (
      <ul className={styles.todoList}>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}
