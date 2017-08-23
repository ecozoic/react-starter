import React from 'react';
import { shallow } from 'enzyme';

import Query from './';

describe('<Query />', () => {
  it('renders', () => {
    shallow(<Query conditions={[]} onAddCondition={function () {}} />);
  });
});
