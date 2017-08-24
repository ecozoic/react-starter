import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { QuerySegment } from '../../models';

import styles from './QueryCondition.scss';

export interface QueryConditionProps {
  condition: QuerySegment;
}

const QueryCondition: React.SFC<QueryConditionProps> = ({ condition }) => {
  return (
    <Card color="orange" className={styles.queryCondition}>
      <Card.Content>{condition.value}</Card.Content>
    </Card>
  );
};

QueryCondition.propTypes = {
  condition: PropTypes.string.isRequired,
};

export default QueryCondition;
