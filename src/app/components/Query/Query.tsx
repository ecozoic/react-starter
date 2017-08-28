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
  moveCondition: (conditionId: string, nextIndex: number) => void;
  findConditionIndex: (conditionId: string) => number;
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
    findConditionIndex,
    moveCondition,
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
          } else if (querySegment.type === QuerySegmentTypes.GROUP) {
            return (
              <div style={{ fontSize: '40px', marginTop: '30px' }} key={querySegment.id}>
                {querySegment.value}
              </div>
            );
          }

          return (
            <QueryCondition
              key={querySegment.id}
              condition={querySegment}
              onConditionClick={onConditionClick}
              findConditionIndex={findConditionIndex}
              moveCondition={moveCondition}
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
