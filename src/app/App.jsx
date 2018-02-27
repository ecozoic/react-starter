import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import routes from './routes';

/**
 * Main application component
 */
const App = () => (
  <BrowserRouter basename={process.env.BASENAME}>
    <div>
      <h1>React Starter</h1>
      {routes}
    </div>
  </BrowserRouter>
);

export default hot(module)(App);
