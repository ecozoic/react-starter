import React from 'react';
import { Grid } from 'semantic-ui-react';

import ConditionList from '../ConditionList';
import Query from '../Query';

import styles from './ExpressionBuilder.scss';

export interface ExpressionBuilderProps {}

const ExpressionBuilder: React.SFC<ExpressionBuilderProps> = (props) => {
  return (
    <div className={styles.expressionBuilder}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <ConditionList />
          </Grid.Column>
          <Grid.Column width={13}>
            <Query />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

ExpressionBuilder.propTypes = {};

export default ExpressionBuilder;
