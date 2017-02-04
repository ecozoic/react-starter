/* @flow */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../components/home';
import { PageNotFound } from '../components/page-not-found';

const routes = (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export { routes };
