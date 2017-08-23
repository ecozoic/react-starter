import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    {routes}
  </ConnectedRouter>
);

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default App;
