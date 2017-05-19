import * as PropTypes from 'prop-types';

export interface Todo {
  id: number;
  completed: boolean;
  text: string;
}

export const todoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
});
