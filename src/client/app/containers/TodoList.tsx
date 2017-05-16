import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import { getTodos } from '../selectors';
import { State } from '../reducers';
import TodoList from '../components/TodoList';

const mapStateToProps = (state: State) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  onTodoClick: (id: number) => dispatch(toggleTodo(id)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
