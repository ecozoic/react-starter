/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import img from '../../../react.png';

import AddTodoContainer from '../../containers/AddTodo';
import TodoListContainer from '../../containers/TodoList';

import styles from './Home.scss';

/**
 * Home page component.
 */
function Home() {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Todo List</title>
      </Helmet>
      <div className={styles.todos}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={img} alt="logo" />
        </div>
        <h1 className={styles.header}>Todo List</h1>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default Home;
