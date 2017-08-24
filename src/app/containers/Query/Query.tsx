import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { addQueryCondition, toggleOperator, toggleConditionPrefix } from '../../actions';
import { State } from '../../reducers';
import { getQuery } from '../../selectors';
import Query from '../../components/Query';
import { QuerySegment } from '../../models';

export interface QueryStateProps {
  query: QuerySegment[];
}

export interface QueryDispatchProps {
  onAddCondition: (condition: string) => void;
  onOperatorClick: (operator: QuerySegment) => void;
  onConditionClick: (condition: QuerySegment) => void;
}

const mapStateToProps: MapStateToProps<QueryStateProps, {}> =
  (state: State) => ({
    query: getQuery(state),
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
  });

const QueryContainer = connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Query);

export default QueryContainer;
