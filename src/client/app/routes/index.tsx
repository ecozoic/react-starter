import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={PageNotFound} />
  </Switch>
);

export default routes;
