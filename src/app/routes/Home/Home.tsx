import React from 'react';
import Helmet from 'react-helmet';

import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/TodoList';

const img = require('../../../react.png');
const styles = require('./Home.scss');

const Home: React.SFC<any> = () => {
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
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
