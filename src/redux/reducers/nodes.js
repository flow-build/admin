/* eslint-disable arrow-body-style */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  parsedNodes: [],
};

const getParsedNodes = (state, action) => {
  return updateObject(state, { parsedNodes: action.nodes });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NODES: return getParsedNodes(state, action);
    default: return state;
  }
};

export default reducer;
