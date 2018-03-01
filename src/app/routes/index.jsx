import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Counter from '../components/Counter';

const LazyAdmin = Loadable({
  loading: () => <div>Loading...</div>,
  loader: () => import(/* webpackChunkName: "admin" */'../components/Admin'),
});

const routes = (
  <Switch>
    <Route exact path="/" component={Counter} />
    <Route path="/admin" component={LazyAdmin} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default routes;
