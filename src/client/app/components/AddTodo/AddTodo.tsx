import * as React from 'react';
import * as PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export interface AddTodoProps {
  onInit: () => void;
  onSubmit: (todo: string) => void;
  disabled?: boolean;
}

export interface AddTodoState {
  todo: string;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  static propTypes = {
    onInit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
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
    const { disabled } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="todo"
            type="text"
            value={todo}
            onChange={this.handleChange}
            disabled={disabled}
          />
          <RaisedButton
            label="Add Todo"
            primary
            type="submit"
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
