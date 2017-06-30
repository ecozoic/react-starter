import React from 'react';
import Helmet from 'react-helmet';

const styles = require('./PageNotFound.scss');

/**
 * Page not found component
 */
const PageNotFound: React.SFC<any> = () => {
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1 className={styles.header}>404</h1>
    </div>
  );
};

export default PageNotFound;
