/* @flow */
import React, { PropTypes } from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';

/**
 * Main application component.
 */
function App({ history }) {
  return (
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
