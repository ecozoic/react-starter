/* @flow */
import React from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';

import img from '../../../react.png';

import AddTodoContainer from '../../containers/AddTodo';
import TodoListContainer from '../../containers/TodoList';

const styles = {
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
};

/**
 * Home page component.
 */
function Home() {
  return (
    <div style={[styles.home]}>
      <Helmet title="Todo List" />
      <div style={[styles.todos]}>
        <div style={[styles.imageContainer]}>
          <img style={[styles.image]} src={img} alt="logo" />
        </div>
        <h1 style={[styles.header]}>Todo List</h1>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default Radium(Home);
