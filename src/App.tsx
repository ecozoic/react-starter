import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';

const App = () => (
  <BrowserRouter basename={process.env.BASENAME}>{routes}</BrowserRouter>
);

export default hot(module)(App);
