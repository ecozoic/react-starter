import { connect } from 'react-redux';

import { toggleTodo } from '../../actions/index';
import { getTodos } from '../../selectors';
import TodoList from '../../components/TodoList/index';

const mapStateToProps = state => ({
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
