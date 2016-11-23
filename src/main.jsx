/* @flow */
import React from 'react';
import { render } from 'react-dom';

import { App } from './app/app.component';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

render(
  <App />,
  document.getElementById('app')
);
