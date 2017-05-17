import * as React from 'react';
import { mount, shallow } from 'enzyme';

import Todo from './Todo';

const noop: () => void = () => undefined;

describe('Todo', () => {
  it('renders without crashing', () => {
    const todo = mount(
      <Todo
        onClick={noop}
        text={'Todo'}
        completed={false}
      />,
    );

    expect(todo).toMatchSnapshot();
  });

  describe('render', () => {
    it('displays todo text', () => {
      const todo = shallow(
        <Todo
          onClick={noop}
          text={'Todo'}
          completed={false}
        />,
      );

      const expected = 'Todo';
      const actual = todo.find('li').text();

      expect(actual).toBe(expected);
    });

    it('has completed class if completed', () => {
      const todo = shallow(
        <Todo
          onClick={noop}
          text={'Todo'}
          completed={true}
        />,
      );

      const classes = todo.find('li').props().className.split(' ');

      expect(classes.indexOf('completed') > -1).toEqual(true);
    });

    it('does not have completed class if incomplete', () => {
      const todo = shallow(
        <Todo
          onClick={noop}
          text={'Todo'}
          completed={false}
        />,
      );

      const classes = todo.find('li').props().className.split(' ');

      expect(classes.indexOf('completed') > -1).toEqual(false);
    });

    it('fires onclick when clicked', () => {
      const mockFn = jest.fn();

      const todo = shallow(
        <Todo
          onClick={mockFn}
          text={'Todo'}
          completed={false}
        />,
      );

      todo.find('li').simulate('click');

      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
