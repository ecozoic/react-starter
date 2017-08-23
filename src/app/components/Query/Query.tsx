import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget } from 'react-dnd';

import { DndTypes } from '../../constants';
import QueryCondition from '../QueryCondition';

import styles from './Query.scss';

export interface QueryProps {
  onAddCondition: (condition: string) => void;
  conditions: string[];
  connectDropTarget?: ConnectDropTarget;
}

const Query: React.SFC<QueryProps> = ({ conditions, connectDropTarget }) => {
  return connectDropTarget(
    <div>
      <Segment className={styles.query}>
        {conditions.map(condition =>
          <QueryCondition key={condition} condition={condition} />,
        )}
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
