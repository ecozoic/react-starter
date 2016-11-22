/* @flow */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { HomeComponent, PageNotFoundComponent } from './components';

import './app.component.scss';

export class AppComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomeComponent} />
        <Route path="*" component={PageNotFoundComponent} />
      </Router>
    );
  }
}
