import React from 'react';
import PropTypes from 'prop-types';
import { Segment, List } from 'semantic-ui-react';

import Condition from '../Condition';

import styles from './ConditionList.scss';

export interface ConditionListProps {
  conditions: string[];
}

const ConditionList: React.SFC<ConditionListProps> = ({ conditions }) => {
  return (
    <Segment className={styles.conditionList}>
      <List relaxed="very" divided verticalAlign="middle" selection className={styles.list}>
        {conditions.map(condition =>
          <Condition key={condition} condition={condition} />,
        )}
      </List>
    </Segment>
  );
};

ConditionList.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ConditionList;
