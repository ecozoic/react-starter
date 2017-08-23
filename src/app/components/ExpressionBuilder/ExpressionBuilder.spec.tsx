import React from 'react';
import { shallow } from 'enzyme';

import ExpressionBuilder from './';

describe('<ExpressionBuilder />', () => {
  it('renders', () => {
    shallow(<ExpressionBuilder />);
  });
});
