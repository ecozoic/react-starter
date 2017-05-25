import * as React from 'react';
import Helmet from 'react-helmet';

import AddTodoContainer from '../../containers/AddTodo';
import TodoListContainer from '../../containers/TodoList';

const img = require('../../../react.png');
const styles = require('./Home.scss');

/**
 * Home page component
 */
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
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    </div>
  );
};

export default Home;
