import React from 'react';
import { Segment } from 'semantic-ui-react';

import styles from './Debug.scss';

export interface DebugProps {
  queryAsString: string;
  queryAsExpr: any;
}

const Debug: React.SFC<DebugProps> = (props) => {
  return (
    <Segment className={styles.debug}>
      {props.queryAsString}
      <br /><br /><br />
      <code style={{ display: 'block', overflowWrap: 'break-word' }}>
        {JSON.stringify(props.queryAsExpr)}
      </code>
    </Segment>
  );
};

Debug.propTypes = {};

export default Debug;
