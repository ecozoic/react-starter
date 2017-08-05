import React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import styles from './PageNotFound.scss';

const PageNotFound: React.SFC<RouteComponentProps<any>> = () => {
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1 className={styles.header}>404</h1>
    </div>
  );
};

PageNotFound.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default PageNotFound;
