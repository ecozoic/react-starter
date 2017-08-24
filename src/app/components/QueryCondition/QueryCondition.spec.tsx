import React from 'react';
import { shallow } from 'enzyme';

import QueryCondition from './';
import { QuerySegmentTypes } from '../../constants';

const condition = {
  id: '1',
  value: 'A',
  type: QuerySegmentTypes.CONDITION,
};

describe('<QueryCondition />', () => {
  it('renders', () => {
    shallow(<QueryCondition condition={condition} onConditionClick={function () { }} />);
  });
});
