/* @flow */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, fetchTodos } from '../actions';

class AddTodo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    const { dispatch } = this.props;
    let input;

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
          <input type='text' ref={node => {
            input = node
          }} />
          <button type='submit'>
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export const AddTodoContainer = connect()(AddTodo);
