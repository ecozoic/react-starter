/* @flow */
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import { TodoList } from '../components/todo-list';

const mapStateToProps = (state) => {
  return {
    todos: state.todos.toJS()
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export const TodoListContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
