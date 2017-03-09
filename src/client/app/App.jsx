/* @flow */
import React, { PropTypes } from 'react';
import { Style } from 'radium';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';

/**
 * Main application component.
 */
function App({ history }) {
  return (
    <div>
      <Style
        rules={{
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            background: '#eee',
            color: '#111',
            fontFamily: '"Roboto", sans-serif',
          },
        }}
      />
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </div>
  );
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default App;
