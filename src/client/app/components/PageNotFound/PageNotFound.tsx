import React, { Component } from 'react';
import Helmet from 'react-helmet';

import styles from './PageNotFound.scss';

/**
 * Page not found component.
 */
class PageNotFound extends Component<undefined, undefined> {
  render() {
    return (
      <div>
        <Helmet>
          <title>404</title>
        </Helmet>
        <h1 className={styles.header}>404</h1>
      </div>
    );
  }
}

export default PageNotFound;
