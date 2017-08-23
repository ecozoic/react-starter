import React from 'react';
import PropTypes from 'prop-types';
import { Segment, List, Icon } from 'semantic-ui-react';

import styles from './ConditionList.scss';

export interface ConditionListProps {
  conditions: string[];
}

const ConditionList: React.SFC<ConditionListProps> = ({ conditions }) => {
  return (
    <Segment className={styles.conditionList}>
      <List relaxed="very" divided verticalAlign="middle" selection className={styles.list}>
        {conditions.map(condition =>
          <List.Item key={condition} className={styles.listItem}>
            <List.Content floated="right">
              <Icon name="move" />
            </List.Content>
            <List.Header>{condition}</List.Header>
          </List.Item>,
        )}
      </List>
    </Segment>
  );
};

ConditionList.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ConditionList;
