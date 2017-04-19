/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';

/**
 * Main application component.
 */
function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  );
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default App;
