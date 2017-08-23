import React from 'react';
import { History } from 'history';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import routes from './routes';

export interface AppProps {
  history: History;
}

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

export default DragDropContext(HTML5Backend)(App);
