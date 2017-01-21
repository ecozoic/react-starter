/* @flow */
import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import { Home } from './components/home';
import { PageNotFound } from './components/page-not-found';

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
