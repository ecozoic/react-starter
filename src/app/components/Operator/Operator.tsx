import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { Operators } from '../../constants';

import styles from './Operator.scss';

export interface OperatorProps {
  operator: Operators;
}

const Operator: React.SFC<OperatorProps> = ({ operator }) => {
  return (
    <Card color="blue" className={styles.operator}>
      <Card.Content>{operator}</Card.Content>
    </Card>
  );
};

Operator.propTypes = {
  operator: PropTypes.oneOf(['AND', 'OR']),
};

export default Operator;
