/* @flow */
import React from 'react';
import { Match, Miss } from 'react-router';

import { Home } from '../components/home';
import { PageNotFound } from '../components/page-not-found';

const routes = (
  <div>
    <Match exactly pattern='/' component={Home} />
    <Miss component={PageNotFound} />
  </div>
);

export { routes };
