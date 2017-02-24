/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import styles from './PageNotFound.scss';

/**
 * Page not found component.
 */
function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <Helmet title="404" />
      <h1>404</h1>
    </div>
  );
}

export default PageNotFound;
