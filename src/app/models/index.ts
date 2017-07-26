import PropTypes from 'prop-types';
import { schema } from 'normalizr';

export interface Todo {
  id: string;
  completed: boolean;
  text: string;
}

export const todoShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
});

export const todoSchema = new schema.Entity('todos');
export const todoListSchema = [todoSchema];

export interface NormalizedTodoList {
  entities: {
    todos: {
      [id: string]: Todo;
    };
  };
  result: string[];
}
