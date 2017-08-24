import React from 'react';
import { Grid } from 'semantic-ui-react';

import ConditionList from '../../containers/ConditionList';
import Query from '../../containers/Query';
import Debug from '../../containers/Debug';

import styles from './ExpressionBuilder.scss';

export interface ExpressionBuilderProps {}

const ExpressionBuilder: React.SFC<ExpressionBuilderProps> = (props) => {
  return (
    <Grid className={styles.expressionBuilder}>
      <Grid.Row>
        <Grid.Column width={3}>
          <ConditionList />
        </Grid.Column>
        <Grid.Column width={8}>
          <Query />
        </Grid.Column>
        <Grid.Column width={5}>
          <Debug />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

ExpressionBuilder.propTypes = {};

export default ExpressionBuilder;
