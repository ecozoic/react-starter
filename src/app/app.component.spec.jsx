/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import { App } from './app.component';

test('it works', () => {
  const component = shallow(
    <App />
  );

  expect(2).toEqual(2);
});
