/* @flow */
import React, { Component } from 'react';

import styles from './home.scss';
import img from '../../../react.png';

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
        <div className={styles.todosContainer}>
          <div className={styles.imageContainer}>
            <img src={img} />
          </div>
          <h1 className={styles.todosHeader}>Todo List</h1>
          <AddTodoContainer />
          <TodoListContainer />
        </div>
      </div>
    );
  }
}
