import React, { Component, FormEvent, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { addTodo, fetchTodos } from '../actions';

interface AddTodoProps {
  dispatch: Function;
}

interface AddTodoState {
  todo: string;
}

class AddTodo extends Component<AddTodoProps, AddTodoState> {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props: AddTodoProps) {
    super(props);

    this.state = {
      todo: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // TODO: only fetch if not initialized
    this.props.dispatch(fetchTodos());
  }

  onSubmit(event: FormEvent<HTMLFormElement>) {
    const { dispatch } = this.props;
    const { todo } = this.state;

    event.preventDefault();

    if (!todo || !todo.trim()) {
      return;
    }

    dispatch(addTodo(todo));
    this.setState({ todo: '' });
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ todo: event.target.value });
  }

  render() {
    const { todo } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField
            name="todo"
            type="text"
            value={todo}
            onChange={this.onChange}
          />
          <RaisedButton
            label="Add Todo"
            primary
            type="submit"
          />
        </form>
      </div>
    );
  }
}

const AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer;
