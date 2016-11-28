/* @flow */
import React, { Component } from 'react';

import styles from './home.scss';

import { AddTodoContainer } from '../../containers/add-todo';
import { TodoListContainer } from '../../containers/todo-list';

/**
 * Home page component.
 * @extends React.Component
 */
export class Home extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.home}>
        <h1>Todo List</h1>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    );
  }
}
