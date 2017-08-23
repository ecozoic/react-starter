import React from 'react';
import PropTypes from 'prop-types';
import { List, Icon } from 'semantic-ui-react';
import { DragSource, DragSourceSpec, DragSourceCollector, ConnectDragSource } from 'react-dnd';

import { DndTypes } from '../../constants';

export interface ConditionProps {
  condition: string;
  connectDragSource?: ConnectDragSource;
}

const Condition: React.SFC<ConditionProps> = ({ condition, connectDragSource }) => {
  return connectDragSource(
    <div role="listitem" className="item">
      <List.Content floated="right">
        <Icon name="move" />
      </List.Content>
      <List.Header>{condition}</List.Header>
    </div>,
  );
};

Condition.propTypes = {
  condition: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

const spec: DragSourceSpec<ConditionProps> = {
  beginDrag: (props, monitor, component) => {
    return {
      condition: props.condition,
    };
  },
};

const collect: DragSourceCollector = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
  };
};

export default DragSource(
  DndTypes.CONDITION,
  spec,
  collect,
)(Condition);
