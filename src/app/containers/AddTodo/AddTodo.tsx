import { Dispatch } from 'redux';
import { connect, MapDispatchToProps } from 'react-redux';

import { State } from '../../reducers';
import { addTodo, fetchTodos } from '../../actions';
import AddTodo from '../../components/AddTodo';

export interface AddTodoDispatchProps {
  onSubmit: (todo: string) => void;
  onInit: () => void;
}

const mapDispatchToProps: MapDispatchToProps<AddTodoDispatchProps, {}> =
  (dispatch: Dispatch<State>) => ({
    onSubmit: (todo: string) => {
      dispatch(addTodo(todo));
    },
    onInit: () => {
      dispatch(fetchTodos());
    },
  });

const AddTodoContainer = connect<{}, AddTodoDispatchProps, {}>(
  undefined,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
