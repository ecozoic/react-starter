/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from './app/root.component';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
