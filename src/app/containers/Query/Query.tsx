import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { addQueryCondition } from '../../actions';
import { State } from '../../reducers';
import { getQueryConditions } from '../../selectors';
import Query from '../../components/Query';

export interface QueryStateProps {
  conditions: string[];
}

export interface QueryDispatchProps {
  onAddCondition: (condition: string) => void;
}

const mapStateToProps: MapStateToProps<QueryStateProps, {}> =
  (state: State) => ({
    conditions: getQueryConditions(state),
  });

const mapDispatchToProps: MapDispatchToProps<QueryDispatchProps, {}> =
  (dispatch: Dispatch<State>) => ({
    onAddCondition: (condition: string) => {
      dispatch(addQueryCondition(condition));
    },
  });

const QueryContainer = connect<QueryStateProps, QueryDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Query);

export default QueryContainer;
