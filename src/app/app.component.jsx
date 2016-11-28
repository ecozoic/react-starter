/* @flow */
import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

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
      <BrowserRouter>
        <div>
          <Match exactly pattern='/' component={Home} />
          <Miss component={PageNotFound} />
        </div>
      </BrowserRouter>
    );
  }
}
