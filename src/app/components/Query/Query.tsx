import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget } from 'react-dnd';

import { DndTypes, QuerySegmentTypes } from '../../constants';
import { QuerySegment } from '../../models';
import QueryCondition from '../QueryCondition';
import Operator from '../Operator';

import styles from './Query.scss';

export interface QueryProps {
  onAddCondition: (condition: string) => void;
  query: QuerySegment[];
  onOperatorClick: (operator: QuerySegment) => void;
  onConditionClick: (condition: QuerySegment) => void;
  connectDropTarget?: ConnectDropTarget;
}

const Query: React.SFC<QueryProps> = (props) => {
  const {
    query,
    onOperatorClick,
    onConditionClick,
    connectDropTarget,
  } = props;

  return connectDropTarget(
    <div>
      <Segment className={styles.query}>
        {query.map((querySegment) => {
          if (querySegment.type === QuerySegmentTypes.OPERATOR) {
            return (
              <Operator
                key={querySegment.id}
                operator={querySegment}
                onOperatorClick={onOperatorClick}
              />
            );
          }
          return (
            <QueryCondition
              key={querySegment.id}
              condition={querySegment}
              onConditionClick={onConditionClick}
            />
          );
        })}
      </Segment>
    </div>,
  );
};

Query.propTypes = {
  onAddCondition: PropTypes.func.isRequired,
  query: PropTypes.arrayOf(PropTypes.object).isRequired,
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
