import React from 'react';
import { shallow } from 'enzyme';

import { Counter } from './Counter';

describe('Counter', () => {
  it('renders', () => {
    const noop = () => undefined;

    // eslint-disable-next-line function-paren-newline
    const counter = shallow(
      <Counter
        count={0}
        onIncrement={noop}
        onDecrement={noop}
      />,
    // eslint-disable-next-line function-paren-newline
    );

    expect(counter).toMatchSnapshot();
  });
});
