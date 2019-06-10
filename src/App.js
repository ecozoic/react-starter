import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import GlobalStyle from './GlobalStyle';

const Home = loadable(() => import('./Home'));

const App = () => (
  <>
    <Helmet>
      <html lang="en" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>Welcome to Razzle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default App;
