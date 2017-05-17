import * as React from 'react';
import { Component, FormEvent, ChangeEvent } from 'react';
import * as PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

interface AddTodoProps {
  onInit: () => void;
  onSubmit: (todo: string) => void;
}

interface AddTodoState {
  todo: string;
}

class AddTodo extends Component<AddTodoProps, AddTodoState> {
  static propTypes = {
    onInit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props: AddTodoProps) {
    super(props);

    this.state = {
      todo: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // TODO: only fetch if not initialized
    this.props.onInit();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    const { onSubmit } = this.props;
    const { todo } = this.state;

    event.preventDefault();

    if (!todo || !todo.trim()) {
      return;
    }

    onSubmit(todo);

    this.setState({ todo: '' });
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ todo: event.target.value });
  }

  render() {
    const { todo } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="todo"
            type="text"
            value={todo}
            onChange={this.handleChange}
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

export default AddTodo;
