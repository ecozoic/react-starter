/* @flow */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { List, fromJS } from 'immutable';

import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders without crashing', () => {
    const todoList = mount(
      <TodoList
        todos={List()}
        onTodoClick={function() { }}
      />
    );

    expect(todoList).toMatchSnapshot();
  });

  describe('render', () => {
    it('displays an unordered list', () => {
      const todoList = shallow(
        <TodoList
          todos={List()}
          onTodoClick={function() { }}
        />
      );

      expect(todoList.find('ul').length).toBe(1);
    });

    it('has todo list class', () => {
      const todoList = shallow(
        <TodoList
          todos={List()}
          onTodoClick={function() { }}
        />
      );

      expect(todoList.hasClass('todoList')).toBe(true);
    });

    it('renders a todo for each todo in props', () => {
      const todoList = shallow(
        <TodoList
          todos={fromJS([
            { id: 1, text: 'Todo 1', completed: false },
            { id: 2, text: 'Todo 2', completed: true },
            { id: 3, text: 'Todo 3', completed: false }
          ])}
          onTodoClick={function() { }}
        />
      );

      expect(todoList.find('Todo').length).toBe(3);
    });

    it('renders todo with proper props', () => {
      const todoList = shallow(
        <TodoList
          todos={fromJS([
            { id: 1, text: 'Todo 1', completed: false }
          ])}
          onTodoClick={function() { }}
        />
      );

      const todo = todoList.find('Todo');

      expect(todo.props().completed).toBe(false);
      expect(todo.props().text).toBe('Todo 1');
    });

    it('sets the todo id as the key', () => {
      const todoList = shallow(
        <TodoList
          todos={fromJS([
            { id: 1, text: 'Todo 1', completed: false }
          ])}
          onTodoClick={function() { }}
        />
      );

      expect(+todoList.find('Todo').key()).toBe(1);
    });

    it('calls onTodoClick with id of clicked todo', () => {
      const mockFn = jest.fn();

      const todoList = shallow(
        <TodoList
          todos={fromJS([
            { id: 1, text: 'Todo 1', completed: false }
          ])}
          onTodoClick={mockFn}
        />
      );

      todoList.find('Todo').simulate('click');

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn.mock.calls[0][0]).toBe(1);
    });
  });
});
