/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import Radium from 'radium';

const styles = {
  header: {
    fontSize: '20px',
  },
};

/**
 * Page not found component.
 */
function PageNotFound() {
  return (
    <div>
      <Helmet title="404" />
      <h1 style={[styles.header]}>404</h1>
    </div>
  );
}

export default Radium(PageNotFound);
