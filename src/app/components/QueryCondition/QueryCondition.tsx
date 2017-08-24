import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { QuerySegment } from '../../models';

import styles from './QueryCondition.scss';

export interface QueryConditionProps {
  condition: QuerySegment;
  onConditionClick: (condition: QuerySegment) => void;
}

const QueryCondition: React.SFC<QueryConditionProps> = ({ condition, onConditionClick }) => {
  return (
    <Card
      color="orange"
      className={styles.queryCondition}
      onClick={() => onConditionClick(condition)}
    >
      <Card.Content>
        <div>
          {condition.prefix || false}
        </div>
        <div>
          {condition.value}
        </div>
      </Card.Content>
    </Card>
  );
};

QueryCondition.propTypes = {
  condition: PropTypes.string.isRequired,
};

export default QueryCondition;
