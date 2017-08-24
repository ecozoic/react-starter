import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../../reducers';
import { getQueryAsString, getQueryAsExpr } from '../../selectors';
import Debug from '../../components/Debug';

export interface DebugStateProps {
  queryAsString: string;
  queryAsExpr: any;
}

export interface DebugDispatchProps {}

const mapStateToProps: MapStateToProps<DebugStateProps, {}> =
  (state: State) => ({
    queryAsString: getQueryAsString(state),
    queryAsExpr: getQueryAsExpr(state),
  });

const mapDispatchToProps: MapDispatchToProps<DebugDispatchProps, {}> =
  (dispatch: Dispatch<State>) => ({});

const DebugContainer = connect<DebugStateProps, DebugDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Debug);

export default DebugContainer;
