import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { Operators } from '../../constants';
import { QuerySegment } from '../../models';

import styles from './Operator.scss';

export interface OperatorProps {
  operator: QuerySegment;
  onOperatorClick: (operator: QuerySegment) => void;
}

const Operator: React.SFC<OperatorProps> = ({ operator, onOperatorClick }) => {
  return (
    <Card
      color={operator.value === Operators.AND ? 'blue' : 'green'}
      className={styles.operator}
      onClick={() => onOperatorClick(operator)}
    >
      <Card.Content>{operator.value}</Card.Content>
    </Card>
  );
};

Operator.propTypes = {
  operator: PropTypes.object.isRequired,
};

export default Operator;
