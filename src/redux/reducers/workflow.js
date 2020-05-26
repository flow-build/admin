/* eslint-disable arrow-body-style */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  workflows: [],
  loading: true,
};

const getWorkflows = (state, action) => {
  let newWorkflows = [];
  newWorkflows = Object.keys(action.workflows).map((key) => {
    return [key, action.workflows[key]];
  });
  return updateObject(state, { workflows: newWorkflows, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WORKFLOWS: return getWorkflows(state, action);
    default: return state;
  }
};

export default reducer;
