import PropTypes from 'prop-types';
import { schema } from 'normalizr';

export const todoShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
});

export const todoSchema = new schema.Entity('todos');
export const todoListSchema = [todoSchema];
