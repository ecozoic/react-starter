/* @flow */
import React from 'react';

import styles from './Home.scss';
import img from '../../../react.png';

import AddTodoContainer from '../../containers/AddTodo';
import TodoListContainer from '../../containers/TodoList';

/**
 * Home page component.
 */
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.todosContainer}>
        <div className={styles.imageContainer}>
          <img src={img} alt="logo" />
        </div>
        <h1 className={styles.todosHeader}>Todo List</h1>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default Home;
