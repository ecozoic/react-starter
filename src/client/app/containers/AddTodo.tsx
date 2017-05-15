import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { addTodo, fetchTodos } from '../actions';

class AddTodo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      todo: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    const { dispatch } = this.props;
    const { todo } = this.state;

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!todo || !todo.trim()) {
              return;
            }
            dispatch(addTodo(todo));
            this.setState({ todo: '' });
          }}
        >
          <TextField name="todo" type="text" value={todo} onChange={e => this.setState({ todo: e.target.value })} />
          <RaisedButton label="Add Todo" primary type="submit" />
        </form>
      </div>
    );
  }
}

const AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer;
