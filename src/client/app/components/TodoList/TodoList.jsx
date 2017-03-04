/* @flow */
import React, { PropTypes } from 'react';

import Todo from '../Todo/Todo';
import styles from './TodoList.scss';

function TodoList({ todos, onTodoClick }) {
  return (
    <ul className={styles.todoList}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />,
      )}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
