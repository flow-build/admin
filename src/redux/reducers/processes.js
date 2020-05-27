/* eslint-disable arrow-body-style */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  processes: [],
  length: 0,
};

const getProcesses = (state, action) => {
  let newProcesses = [];
  newProcesses = action.processes.map((process) => {
    return {
      id: process.id,
      createdAt: process.created_at,
      status: process.state.status,
      stepNumber: process.state.step_number,
      nodeId: process.state.node_id,
      nextNodeId: process.state.next_node_id,
      lastUpdated: process.state.created_at,
      bag: process.state.bag,
      result: process.state.result,
    };
  });
  return updateObject(state, { processes: newProcesses, length: newProcesses.length });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROCESSES: return getProcesses(state, action);
    default: return state;
  }
};

export default reducer;
