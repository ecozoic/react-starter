/* @flow */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
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
          <input ref={node => {
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
