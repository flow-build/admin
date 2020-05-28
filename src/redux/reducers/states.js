/* eslint-disable arrow-body-style */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  states: [],
  length: 0,
};

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STATES: return getStates(state, action);
    default: return state;
  }
};

export default reducer;
