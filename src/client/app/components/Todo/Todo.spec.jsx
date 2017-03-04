/* @flow */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Todo from './Todo';

describe('Todo', () => {
  it('renders without crashing', () => {
    const todo = mount(
      <Todo
        onClick={function noop() { }}
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
          onClick={function noop() { }}
          text={'Todo'}
          completed={false}
        />,
      );

      const expected = 'Todo';
      const actual = todo.find('li').text();

      expect(actual).toBe(expected);
    });

    it('displays strikethrough if completed', () => {
      const todo = shallow(
        <Todo
          onClick={function noop() { }}
          text={'Todo'}
          completed
        />,
      );

      const expected = 'line-through';
      const actual = todo.props().style.textDecoration;

      expect(actual).toBe(expected);
    });

    it('displays no strikethrough if incomplete', () => {
      const todo = shallow(
        <Todo
          onClick={function noop() { }}
          text={'Todo'}
          completed={false}
        />,
      );

      const expected = 'none';
      const actual = todo.props().style.textDecoration;

      expect(actual).toBe(expected);
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

    it('has todo class', () => {
      const todo = shallow(
        <Todo
          onClick={function noop() { }}
          text={'Todo'}
          completed={false}
        />,
      );

      expect(todo.find('li').hasClass('todo')).toBe(true);
    });
  });
});
