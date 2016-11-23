/* @flow */
import React, { Component } from 'react';

import styles from './home.component.scss';

/**
 * Home page component.
 * @extends Component
 */
export class Home extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.home}>
        <h1>Hello world!</h1>
        <input type="text" />
        <h2>Foo bar baz</h2>
      </div>
    );
  }
}
