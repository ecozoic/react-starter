import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import { State } from '../../reducers';

import Query from './';

const mockStore = configureMockStore();

describe('<Query />', () => {
  let store: Store<State>;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <Query />
      </Provider>,
    );
  });
});
