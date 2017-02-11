/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App history={{}} />);
    expect(app).toMatchSnapshot();
  });
});
