import React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Container } from 'semantic-ui-react';

import ExpressionBuilder from '../../components/ExpressionBuilder';

const Home: React.SFC<RouteComponentProps<any>> = () => {
  return (
    <div>
      <Helmet>
        <title>Expression Builder</title>
      </Helmet>
      <Container>
        <h1 style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
          Expression Builder
        </h1>
        <ExpressionBuilder />
      </Container>
    </div>
  );
};

Home.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Home;
