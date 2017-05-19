import * as React from 'react';
import { mount, shallow } from 'enzyme';

import TodoList from './TodoList';
import { TodoProps } from '../Todo/Todo';

const noop: () => void = () => undefined;

describe('TodoList', () => {
  it('renders without crashing', () => {
    const todoList = mount(
      <TodoList
        todos={[]}
        onTodoClick={noop}
      />,
    );

    expect(todoList).toMatchSnapshot();
  });

  describe('render', () => {
    it('displays an unordered list', () => {
      const todoList = shallow(
        <TodoList
          todos={[]}
          onTodoClick={noop}
        />,
      );

      expect(todoList.find('ul').length).toBe(1);
    });

    it('renders a todo for each todo in props', () => {
      const todos = [
        { id: 1, text: 'Todo 1', completed: false },
        { id: 2, text: 'Todo 2', completed: true },
        { id: 3, text: 'Todo 3', completed: false },
      ];

      const todoList = shallow(
        <TodoList
          todos={todos}
          onTodoClick={noop}
        />,
      );

      expect(todoList.find('Todo').length).toBe(3);
    });

    it('renders todo with proper props', () => {
      const todos = [
        { id: 1, text: 'Todo 1', completed: false },
      ];

      const todoList = shallow(
        <TodoList
          todos={todos}
          onTodoClick={noop}
        />,
      );

      const todo = todoList.find('Todo');
      const props = todo.props() as TodoProps;

      expect(props.completed).toBe(false);
      expect(props.text).toBe('Todo 1');
    });

    it('sets the todo id as the key', () => {
      const todos = [
        { id: 1, text: 'Todo 1', completed: false },
      ];

      const todoList = shallow(
        <TodoList
          todos={todos}
          onTodoClick={noop}
        />,
      );

      expect(todoList.find('Todo').key()).toEqual('1');
    });

    it('calls onTodoClick with id of clicked todo', () => {
      const mockFn = jest.fn();

      const todos = [
        { id: 1, text: 'Todo 1', completed: false },
      ];

      const todoList = shallow(
        <TodoList
          todos={todos}
          onTodoClick={mockFn}
        />,
      );

      todoList.find('Todo').simulate('click');

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn.mock.calls[0][0]).toBe(1);
    });
  });
});
