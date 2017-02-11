/* @flow */
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList/TodoList';

const mapStateToProps = state => ({
  todos: state.get('todos').toJS(),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
