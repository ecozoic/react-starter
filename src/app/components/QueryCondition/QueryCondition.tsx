import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import {
  DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget,
  DragSource, DragSourceSpec, DragSourceCollector, ConnectDragSource,
} from 'react-dnd';
import { compose } from 'redux';

import { DndTypes } from '../../constants';
import { QuerySegment } from '../../models';

import styles from './QueryCondition.scss';

export interface QueryConditionProps {
  condition: QuerySegment;
  onConditionClick: (condition: QuerySegment) => void;
  moveCondition: (conditionId: string, nextIndex: number) => void;
  findConditionIndex: (conditionId: string) => number;

  connectDropTarget?: ConnectDropTarget;
  connectDragSource?: ConnectDragSource;
  isDragging?: boolean;
}

const QueryCondition: React.SFC<QueryConditionProps> = (props) => {
  const {
    condition,
    isDragging,
    onConditionClick,
    connectDropTarget,
    connectDragSource,
  } = props;

  return connectDragSource(connectDropTarget(
    <div style={{ opacity: isDragging ? 0 : 1 }}>
      <Card
        color={condition.prefix ? 'red' : 'orange'}
        className={styles.queryCondition}
        onClick={() => onConditionClick(condition)}
      >
        <Card.Content>
          <div>
            {condition.prefix || false}
          </div>
          <div>
            {condition.value}
          </div>
        </Card.Content>
      </Card>
    </div>,
  ));
};

QueryCondition.propTypes = {
  condition: PropTypes.object.isRequired,
};

const dropSpec: DropTargetSpec<QueryConditionProps> = {
  canDrop() {
    return true;
  },

  hover(props, monitor) {
    const draggedId = (monitor.getItem() as any).condition.id;
    const overId = props.condition.id;

    if (draggedId !== overId) {
      const overIndex = props.findConditionIndex(overId);
      props.moveCondition(draggedId, overIndex);
    }
  },
};

const dropCollect: DropTargetCollector = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
  };
};

const dragSpec: DragSourceSpec<QueryConditionProps> = {
  beginDrag(props) {
    return {
      condition: props.condition,
      originalIndex: props.findConditionIndex(props.condition.id),
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem() as any;
    const droppedId = item.condition.id;
    const originalIndex = item.originalIndex;

    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveCondition(droppedId, originalIndex);
    }
  },
};

const dragCollect: DragSourceCollector = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

export default compose(
  DropTarget(DndTypes.QUERY_CONDITION, dropSpec, dropCollect),
  DragSource(DndTypes.QUERY_CONDITION, dragSpec, dragCollect),
)(QueryCondition);
