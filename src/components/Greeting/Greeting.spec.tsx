import React from 'react';
import { shallow } from 'enzyme';

import Greeting from './Greeting';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<Greeting />);

    expect(wrapper).toHaveLength(1);
  });
});
