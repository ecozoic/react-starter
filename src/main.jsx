import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { AppComponent } from './app/app.component';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <AppComponent />
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./app/app.component', render);
}
