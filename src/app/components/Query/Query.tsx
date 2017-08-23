import React from 'react';
import { Segment } from 'semantic-ui-react';

import styles from './Query.scss';

export interface QueryProps {}

const Query: React.SFC<QueryProps> = (props) => {
  return (
    <Segment className={styles.query}>
      Query
    </Segment>
  );
};

Query.propTypes = {};

export default Query;
