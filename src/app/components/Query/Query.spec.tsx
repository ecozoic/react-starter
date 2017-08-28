import React from 'react';
import { shallow } from 'enzyme';

import Query from './';
import { QuerySegmentTypes } from '../../constants';

const query = [{
  id: '1',
  value: 'A',
  type: QuerySegmentTypes.CONDITION,
}];

describe('<Query />', () => {
  it('renders', () => {
    shallow(
      <Query
        query={query}
        onAddCondition={function () {}}
        onOperatorClick={function () {}}
        onConditionClick={function () {}}
        moveCondition={function () {}}
        findConditionIndex={function () { return 1; }}
      />,
    );
  });
});
