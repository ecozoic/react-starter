/* @flow */
import React from 'react';
import { mount } from 'enzyme';

import { App } from './app';

describe('App', () => {
  it('renders without crashing', () => {
    const app = mount(<App />);
    expect(app).toMatchSnapshot();
  });
});
