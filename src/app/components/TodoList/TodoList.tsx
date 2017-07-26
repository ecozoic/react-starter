import React from 'react';
import PropTypes from 'prop-types';

import { todoShape, Todo } from '../../models';
import TodoComponent from '../Todo';

const styles = require('./TodoList.scss');

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: string) => void;
}

const TodoList: React.SFC<TodoListProps> = ({ todos, onTodoClick }) => {
  return (
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
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
