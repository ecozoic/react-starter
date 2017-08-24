import React from 'react';
import { shallow } from 'enzyme';

import { Operators } from '../../constants';

import Operator from './';

describe('<Operator />', () => {
  it('renders', () => {
    shallow(<Operator operator={Operators.AND} />);
  });
});
