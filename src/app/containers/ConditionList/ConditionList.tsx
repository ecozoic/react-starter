import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../../reducers';
import { getConditions } from '../../selectors';
import ConditionList from '../../components/ConditionList';

export interface ConditionListStateProps {
  conditions: string[];
}

export interface ConditionListDispatchProps {}

const mapStateToProps: MapStateToProps<ConditionListStateProps, {}> =
  (state: State) => ({
    conditions: getConditions(state),
  });

const mapDispatchToProps: MapDispatchToProps<ConditionListDispatchProps, {}> =
  (dispatch: Dispatch<State>) => ({});

const ConditionListContainer = connect<ConditionListStateProps, ConditionListDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(ConditionList);

export default ConditionListContainer;
