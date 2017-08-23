import React from 'react';
import PropTypes from 'prop-types';

import { todoShape } from '../../models';
import TodoComponent from '../Todo/index';

import styles from './TodoList.scss';

const TodoList = ({ todos, onTodoClick }) => (
  <ul className={styles.todoList}>
    {todos.map(todo => (
      <TodoComponent
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        completed={todo.completed}
        text={todo.text}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
