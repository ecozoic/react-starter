import React from 'react';
import { shallow } from 'enzyme';

import Condition from './';

describe('<Condition />', () => {
  it('renders', () => {
    shallow(<Condition condition="A" />);
  });
});
