/* @flow */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { routes } from './app.routes';

import './app.component.scss';

/**
 * Main application component.
 * @extends React.Component
 */
export class AppComponent extends React.Component {
  /**
   * Render method.
   */
  render() {
    return (
      <Router history={browserHistory}  routes={routes} />
    );
  }
}
