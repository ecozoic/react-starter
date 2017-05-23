import * as React from 'react';
import { History } from 'history';
import * as PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';

interface AppProps {
  history: History;
}

/**
 * Main application component.
 */
class App extends React.Component<AppProps, undefined> {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    );
  }
}

export default App;
