import React from 'react';
import { shallow } from 'enzyme';

import Debug from './';

describe('<Debug />', () => {
  it('renders', () => {
    shallow(<Debug queryAsString="" queryAsExpr />);
  });
});
