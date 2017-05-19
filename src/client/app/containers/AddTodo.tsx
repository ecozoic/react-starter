import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../reducers';
import { addTodo, fetchTodos } from '../actions';
import AddTodo from '../components/AddTodo';

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  onSubmit: (todo: string) => {
    dispatch(addTodo(todo));
  },
  onInit: () => {
    dispatch(fetchTodos());
  },
});

const AddTodoContainer = connect(
  undefined,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
