import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import {
  addQueryCondition,
  toggleOperator,
  toggleConditionPrefix,
  moveQueryCondition,
} from '../../actions';
import { State } from '../../reducers';
import { getQuery, getQueryConditionIndex } from '../../selectors';
import Query from '../../components/Query';
import { QuerySegment } from '../../models';

export interface QueryStateProps {
  query: QuerySegment[];
  findConditionIndex: (conditionId: string) => number;
}

export interface QueryDispatchProps {
  onAddCondition: (condition: string) => void;
  onOperatorClick: (operator: QuerySegment) => void;
  onConditionClick: (condition: QuerySegment) => void;
  moveCondition: (conditionId: string, nextIndex: number) => void;
}

const mapStateToProps: MapStateToProps<QueryStateProps, {}> =
  (state: State) => ({
    query: getQuery(state),
    findConditionIndex: (conditionId: string) => getQueryConditionIndex(state, conditionId),
  });

const mapDispatchToProps: MapDispatchToProps<QueryDispatchProps, {}> =
  (dispatch: Dispatch<State>) => ({
    onAddCondition: (condition: string) => {
      dispatch(addQueryCondition(condition));
    },
    onOperatorClick: (operator: QuerySegment) => {
      dispatch(toggleOperator(operator.id));
    },
    onConditionClick: (condition: QuerySegment) => {
      dispatch(toggleConditionPrefix(condition.id));
    },
    moveCondition: (conditionId: string, nextIndex: number) => {
      dispatch(moveQueryCondition(conditionId, nextIndex));
    },
  });

const QueryContainer = connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Query);

export default QueryContainer;
