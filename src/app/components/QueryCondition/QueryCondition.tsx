import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import styles from './QueryCondition.scss';

export interface QueryConditionProps {
  condition: string;
}

const QueryCondition: React.SFC<QueryConditionProps> = ({ condition }) => {
  return (
    <Card color="green" className={styles.queryCondition}>
      <Card.Content>{condition}</Card.Content>
    </Card>
  );
};

QueryCondition.propTypes = {
  condition: PropTypes.string.isRequired,
};

export default QueryCondition;
