import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';

import { todoShape, Todo } from '../../models';
import TodoComponent from '../Todo';

const styles = require('./TodoList.scss');

export interface TodoListProps {
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
            key={todo.id}
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
