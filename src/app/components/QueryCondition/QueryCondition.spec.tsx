import React from 'react';
import { shallow } from 'enzyme';

import QueryCondition from './';

describe('<QueryCondition />', () => {
  it('renders', () => {
    shallow(<QueryCondition condition="A" />);
  });
});
