/* @flow */
import React, { Component } from 'react';

import styles from './page-not-found.component.scss';

/**
 * Page not found component.
 * @extends React.Component
 */
export class PageNotFound extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.pageNotFound}>
        <h1>404</h1>
      </div>
    );
  }
}
