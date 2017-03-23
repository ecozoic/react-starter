/* @flow */
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Helmet from 'react-helmet';

import img from '../../../react.png';

import AddTodoContainer from '../../containers/AddTodo';
import TodoListContainer from '../../containers/TodoList';

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '48px',
  },
  todos: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    alignSelf: 'center',
    borderRadius: '100%',
    height: '217px',
    overflow: 'hidden',
    width: '217px',
  },
  image: {
    height: '217px',
    width: '217px',
  },
  header: {
    textAlign: 'center',
  },
});

/**
 * Home page component.
 */
function Home() {
  return (
    <div className={css(styles.home)}>
      <Helmet>
        <title>Todo List</title>
      </Helmet>
      <div className={css(styles.todos)}>
        <div className={css(styles.imageContainer)}>
          <img className={css(styles.image)} src={img} alt="logo" />
        </div>
        <h1 className={css(styles.header)}>Todo List</h1>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default Home;
