import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import App from './App';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toHaveLength(_.identity(1));
  });
});
