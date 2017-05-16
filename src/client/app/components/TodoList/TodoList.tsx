import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { todoShape, Todo } from '../../models';
import TodoComponent from '../Todo';

const styles = require('./TodoList.scss');

interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

class TodoList extends Component<TodoListProps, undefined> {
  static propTypes = {
    todos: PropTypes.arrayOf(todoShape).isRequired,
    onTodoClick: PropTypes.func.isRequired,
  };

  render() {
    const { todos, onTodoClick } = this.props;

    return (
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <TodoComponent
            onClick={() => onTodoClick(todo.id)}
            completed={todo.completed}
            text={todo.text}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
