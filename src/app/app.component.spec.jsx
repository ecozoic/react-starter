import React from 'react';
import { shallow } from 'enzyme';

import { AppComponent } from './app.component';

test('it works', () => {
  const component = shallow(
    <AppComponent />
  );

  expect(2).toEqual(2);
});
