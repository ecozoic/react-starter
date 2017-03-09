/* @flow */
import React, { PropTypes } from 'react';
import Radium from 'radium';

import Todo from '../Todo';

const styles = {
  todoList: {
    cursor: 'pointer',
  },
};

function TodoList({ todos, onTodoClick }) {
  return (
    <ul style={[styles.todoList]}>
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

export default Radium(TodoList);
