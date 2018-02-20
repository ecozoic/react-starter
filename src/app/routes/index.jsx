import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Counter from '../components/Counter';

const routes = (
  <Switch>
    <Route exact path="/" component={Counter} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default routes;
