import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

import { todoShape, Todo } from '../../models';
import TodoComponent from '../Todo';

const styles = require('./TodoList.scss');

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
  loading?: boolean;
}

const TodoList: React.SFC<TodoListProps> = ({ todos, onTodoClick, loading }) => {
  return (
    <div>
      {loading ? (
        <div className={styles.progressContainer}>
          <CircularProgress />
        </div>
      ) : (
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
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

TodoList.defaultProps = {
  loading: false,
};

export default TodoList;
