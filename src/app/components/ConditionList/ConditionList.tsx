import React from 'react';
import { Segment, List, Icon } from 'semantic-ui-react';

import styles from './ConditionList.scss';

export interface ConditionListProps {}

const conditions = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const ConditionList: React.SFC<ConditionListProps> = (props) => {
  return (
    <div className={styles.conditionList}>
      <Segment>
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
    </div>
  );
};

ConditionList.propTypes = {};

export default ConditionList;
