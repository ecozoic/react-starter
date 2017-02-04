/* @flow */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { routes } from './routes';

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
        { routes }
      </BrowserRouter>
    );
  }
}
