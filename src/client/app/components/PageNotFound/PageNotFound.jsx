/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import './PageNotFound.scss';

/**
 * Page not found component.
 */
function PageNotFound() {
  return (
    <div className="PageNotFound">
      <Helmet title="404" />
      <h1 className="PageNotFound__header">404</h1>
    </div>
  );
}

export default PageNotFound;
