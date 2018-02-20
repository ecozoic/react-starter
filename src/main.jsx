import React from 'react';
import { render } from 'react-dom';

const renderApp = () => {
  render(
    <h1>Hello world!</h1>,
    document.getElementById('app'),
  );
};

renderApp();
