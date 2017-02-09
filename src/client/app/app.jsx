/* @flow */
import React, { Component, PropTypes } from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';

import { routes } from './routes';

/**
 * Main application component.
 * @extends React.Component
 */
export class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  /**
   * Render method.
   */
  render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    );
  }
}
