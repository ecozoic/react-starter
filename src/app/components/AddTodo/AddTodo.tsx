import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'semantic-ui-react';

export interface AddTodoProps {
  onInit: () => void;
  onSubmit: (todo: string) => void;
}

export interface AddTodoState {
  todo: string;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
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

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const { onSubmit } = this.props;
    const { todo } = this.state;

    event.preventDefault();

    if (!todo || !todo.trim()) {
      return;
    }

    onSubmit(todo);

    this.setState({ todo: '' });
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ todo: event.target.value });
  }

  render() {
    const { todo } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="todo"
            type="text"
            value={todo}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            primary
          >
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodo;