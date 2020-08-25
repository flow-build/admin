/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  states: [],
  length: 0,
  stateNodes: [],
  blueprintSpec: null,
};

const abortProcess = (state) => updateObject(state, {});

const createNewProcess = (state) => updateObject(state, {});

const setProcessState = (state) => updateObject(state, {});

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

const getBlueprintXML = (state, action) => {
  const blueprintSpec = action.blueprintSpec;
  return updateObject(state, { blueprintSpec });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STATES: return getStates(state, action);
    case actionTypes.ABORT_PROCESS: return abortProcess(state);
    case actionTypes.GET_BLUEPRINT_WORKFLOW: return getBlueprintWorkflow(state, action);
    case actionTypes.GET_BLUEPRINT_XML: return getBlueprintXML(state, action);
    case actionTypes.CREATE_NEW_PROCESS: return createNewProcess(state, action);
    case actionTypes.SET_STATE_PROCESS_START: return setProcessState(state);
    default: return state;
  }
};

export default reducer;
