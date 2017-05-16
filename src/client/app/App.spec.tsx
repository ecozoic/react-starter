import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';

import App from './App';

const history = createMemoryHistory();

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App history={history} />);
    expect(app).toMatchSnapshot();
  });
});
