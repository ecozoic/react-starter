import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget } from 'react-dnd';

import { DndTypes, Operators } from '../../constants';
import QueryCondition from '../QueryCondition';
import Operator from '../Operator';

import styles from './Query.scss';

export interface QueryProps {
  onAddCondition: (condition: string) => void;
  conditions: string[];
  connectDropTarget?: ConnectDropTarget;
}

const Query: React.SFC<QueryProps> = (props) => {
  const {
    conditions,
    connectDropTarget,
  } = props;

  return connectDropTarget(
    <div>
      <Segment className={styles.query}>
        {conditions.map((condition, idx) => {
          return (
            <div key={condition} style={{ display: 'flex' }}>
              {idx > 0 &&
                <Operator operator={Operators.AND} />
              }
              <QueryCondition condition={condition}/>
            </div>
          );
        })}
      </Segment>
    </div>,
  );
};

Query.propTypes = {
  onAddCondition: PropTypes.func.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const spec: DropTargetSpec<QueryProps> = {
  drop: (props, monitor, component) => {
    const condition: string = (monitor.getItem() as any).condition;
    props.onAddCondition(condition);
  },
};

const collect: DropTargetCollector = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
  };
};

export default DropTarget(
  DndTypes.CONDITION,
  spec,
  collect,
)(Query);
