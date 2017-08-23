import React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import styles from './Home.scss';

const Home: React.SFC<RouteComponentProps<any>> = () => {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Expression Builder</title>
      </Helmet>
      <h1>Expression Builder</h1>
    </div>
  );
};

Home.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Home;
