/* @flow */
import React, { Component } from 'react';

import styles from './home.component.scss';

import { AddTodoContainer, TodoListContainer } from '../../containers';

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
