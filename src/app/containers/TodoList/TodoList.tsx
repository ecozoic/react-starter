import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleTodo } from '../../actions';
import { Todo } from '../../models';
import { getTodos } from '../../selectors';
import { State } from '../../reducers';
import TodoList from '../../components/TodoList';

export interface TodoListStateProps {
  todos: Todo[];
}

export interface TodoListDispatchProps {
  onTodoClick: (id: string) => void;
}

const mapStateToProps: MapStateToProps<TodoListStateProps, {}> = (state: State) => ({
  todos: getTodos(state),
});

const mapDispatchToProps: MapDispatchToProps<TodoListDispatchProps, {}> =
  (dispatch: Dispatch<State>) => ({
    onTodoClick: (id: string) => {
      dispatch(toggleTodo(id));
    },
  });

const TodoListContainer = connect<TodoListStateProps, TodoListDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
