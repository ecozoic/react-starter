import React from 'react';
import ReactDOM from 'react-dom';

import { AppComponent } from './app/app.component';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

ReactDOM.render(
  <AppComponent />,
  document.getElementById('app')
);
