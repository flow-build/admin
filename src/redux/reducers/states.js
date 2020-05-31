/* eslint-disable arrow-body-style */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  states: [],
  length: 0,
  stateNodes: [],
};

const abortProcess = (state) => updateObject(state, {});

const getStates = (state, action) => {
  let newStates = [];
  newStates = action.states.map((states) => {
    return {
      id: states.id,
      createdAt: states.created_at,
      status: states.status,
      stepNumber: states.step_number,
      nodeId: states.node_id,
      nextNodeId: states.next_node_id,
      bag: states.bag,
      result: states.result,
    };
  });
  return updateObject(state, { states: newStates, length: newStates.length });
};

const getBlueprintWorkflow = (state, action) => {
  let newNodes = [];
  newNodes = action.nodes.map((node) => {
    return node.id;
  });
  return updateObject(state, { stateNodes: newNodes });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STATES: return getStates(state, action);
    case actionTypes.ABORT_PROCESS: return abortProcess(state);
    case actionTypes.GET_BLUEPRINT_WORKFLOW: return getBlueprintWorkflow(state, action);
    default: return state;
  }
};

export default reducer;
