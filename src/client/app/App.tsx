import * as React from 'react';
import { History } from 'history';
import * as PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';

export interface AppProps {
  history: History;
}

/**
 * Main application component
 */
const App: React.SFC<AppProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
