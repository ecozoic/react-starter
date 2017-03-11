/* @flow */
import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Todo from '../Todo';

const styles = StyleSheet.create({
  todoList: {
    cursor: 'pointer',
  },
});

function TodoList({ todos, onTodoClick }) {
  return (
    <ul className={css(styles.todoList)}>
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
