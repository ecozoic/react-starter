import * as React from 'react';
import { shallow } from 'enzyme';

import AddTodo from './';

const noop: () => void = () => undefined;

describe('<AddTodo />', () => {
  it('renders without crashing', () => {
    const addTodo = shallow(
      <AddTodo
        onInit={noop}
        onSubmit={noop}
      />,
    );

    expect(addTodo).toMatchSnapshot();
  });

  describe('handleSubmit()', () => {
    it('prevents default behavior on form submission', () => {
      const preventDefault = jest.fn();

      const event: any = {
        preventDefault,
      };

      const addTodo = shallow(
        <AddTodo
          onInit={noop}
          onSubmit={noop}
        />,
      );

      const form = addTodo.find('form');
      form.simulate('submit', event);

      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('noops for empty and whitespace strings', () => {
      const onSubmit = jest.fn();

      const addTodo = shallow(
        <AddTodo
          onInit={noop}
          onSubmit={onSubmit}
        />,
      );

      addTodo.setState({ todo: '' });

      const instance = addTodo.instance() as AddTodo;
      const event: any = { preventDefault: noop };

      instance.handleSubmit(event);

      expect(onSubmit).not.toHaveBeenCalled();

      addTodo.setState({ todo: '    ' });

      instance.handleSubmit(event);

      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('calls onSubmit for valid todos', () => {
      const onSubmit = jest.fn();
      const todo = 'todo';

      const addTodo = shallow(
        <AddTodo
          onInit={noop}
          onSubmit={onSubmit}
        />,
      );

      addTodo.setState({ todo });

      const instance = addTodo.instance() as AddTodo;
      const event: any = { preventDefault: noop };

      instance.handleSubmit(event);

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith(todo);
    });

    it('resets state after submission', () => {
      const addTodo = shallow(
        <AddTodo
          onInit={noop}
          onSubmit={noop}
        />,
      );

      addTodo.setState({ todo: 'foo' });

      const instance = addTodo.instance() as AddTodo;
      const event: any = { preventDefault: noop };

      instance.handleSubmit(event);

      expect(addTodo.state('todo')).toEqual('');
    });
  });

  describe('handleChange()', () => {
    it('sets state', () => {
      const addTodo = shallow(
        <AddTodo
          onInit={noop}
          onSubmit={noop}
        />,
      );

      const instance = addTodo.instance() as AddTodo;
      const todo = 'todo';
      const event: any = { target: { value: todo } };

      instance.handleChange(event);

      expect(addTodo.state('todo')).toEqual(todo);
    });
  });
});
