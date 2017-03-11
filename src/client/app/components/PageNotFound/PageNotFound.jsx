/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    fontSize: '20px',
  },
});

/**
 * Page not found component.
 */
function PageNotFound() {
  return (
    <div>
      <Helmet title="404" />
      <h1 className={css(styles.header)}>404</h1>
    </div>
  );
}

export default PageNotFound;
