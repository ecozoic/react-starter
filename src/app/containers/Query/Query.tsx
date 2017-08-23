import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../../reducers';
import Query from '../../components/Query';

export interface QueryStateProps {}

export interface QueryDispatchProps {}

const mapStateToProps: MapStateToProps<QueryStateProps, {}> =
  (state: State) => ({});

const mapDispatchToProps: MapDispatchToProps<QueryDispatchProps, {}> =
  (dispatch: Dispatch<State>) => ({});

const QueryContainer = connect<QueryStateProps, QueryDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Query);

export default QueryContainer;
