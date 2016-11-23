/* @flow */
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { Home, PageNotFound } from './components';

/**
 * Main application component.
 * @extends React.Component
 */
export class App extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='*' component={PageNotFound} />
      </Router>
    );
  }
}
