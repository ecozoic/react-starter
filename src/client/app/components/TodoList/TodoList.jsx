/* @flow */
import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Todo from '../Todo/Todo';
import styles from './TodoList.scss';

function TodoList({ todos, onTodoClick }) {
  return (
    <ul className={styles.todoList}>
      {todos.map(todo =>
        <Todo
          key={todo.get('id')}
          {...todo.toJS()}
          onClick={() => onTodoClick(todo.get('id'))}
        />,
      )}
    </ul>
  );
}

TodoList.propTypes = {
  todos: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
