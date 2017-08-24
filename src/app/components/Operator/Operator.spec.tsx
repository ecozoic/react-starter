import React from 'react';
import { shallow } from 'enzyme';

import { Operators, QuerySegmentTypes } from '../../constants';

import Operator from './';

const operator = {
  id: '1',
  type: QuerySegmentTypes.OPERATOR,
  value: Operators.AND,
};

describe('<Operator />', () => {
  it('renders', () => {
    shallow(<Operator operator={operator} onOperatorClick={function () {}} />);
  });
});
