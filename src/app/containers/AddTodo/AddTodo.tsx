import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../reducers';
import { addTodo, fetchTodos } from '../../actions';
import { getPending, getError } from '../../selectors';
import AddTodo from '../../components/AddTodo';

const mapStateToProps = (state: State) => ({
  disabled: getPending(state) || !!getError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  onSubmit: (todo: string) => {
    dispatch(addTodo(todo));
  },
  onInit: () => {
    dispatch(fetchTodos());
  },
});

const AddTodoContainer = connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
