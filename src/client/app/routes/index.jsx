/* @flow */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/Home';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import AboutContainer from '../components/About/About';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutContainer} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default routes;
