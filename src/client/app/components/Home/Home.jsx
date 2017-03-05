/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import './Home.scss';
import img from '../../../react.png';

import AddTodoContainer from '../../containers/AddTodo';
import TodoListContainer from '../../containers/TodoList';

/**
 * Home page component.
 */
function Home() {
  return (
    <div className="Home">
      <Helmet title="Todo List" />
      <div className="Home__todos">
        <div className="Home__image-container">
          <img className="Home__image" src={img} alt="logo" />
        </div>
        <h1 className="Home__header">Todo List</h1>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default Home;
