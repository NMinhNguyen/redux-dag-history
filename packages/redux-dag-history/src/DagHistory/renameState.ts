import * as Immutable from 'immutable';
import DagGraph from '../DagGraph';
import {
  IDagHistory,
  StateId,
  BranchId,
  IConfiguration,
} from '../interfaces';

const log = require('debug')('redux-dag-history:DagHistory');

export default function renameState<T>(
  stateId: StateId,
  name: string,
  history: IDagHistory<T>,
): IDagHistory<T> {
  log('rename state %s => %s', stateId, name);
  const { graph } = history;
  return {
    current: history.current,
    graph: graph.withMutations(g => new DagGraph(g).renameState(stateId, name)),
  };
}
