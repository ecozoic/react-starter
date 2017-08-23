import React from 'react';
import { shallow } from 'enzyme';

import ConditionList from './';

describe('<ConditionList />', () => {
  it('renders', () => {
    shallow(<ConditionList conditions={[]} />);
  });
});
