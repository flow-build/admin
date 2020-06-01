/* eslint-disable arrow-body-style */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  workflows: [],
  workflowNames: [],
};

const getWorkflows = (state, action) => {
  let newWorkflows = [];
  const newWorkflowNames = [];
  newWorkflows = Object.keys(action.workflows).map((key) => {
    newWorkflowNames.push(action.workflows[key].workflow_name);
    return {
      workflow_id: key,
      workflow_name: action.workflows[key].workflow_name,
      workflow_description: action.workflows[key].workflow_description,
      workflow_version: action.workflows[key].workflow_version,
      waiting: action.workflows[key].waiting ? action.workflows[key].waiting : 0,
      unstarted: action.workflows[key].unstarted ? action.workflows[key].unstarted : 0,
      aborted: action.workflows[key].aborted ? action.workflows[key].aborted : 0,
      pending: action.workflows[key].pending ? action.workflows[key].pending : 0,
      finished: action.workflows[key].finished ? action.workflows[key].finished : 0,
      running: action.workflows[key].running ? action.workflows[key].running : 0,
      error: action.workflows[key].error ? action.workflows[key].error : 0,
      interrupted: action.workflows[key].interrupted ? action.workflows[key].interrupted : 0,
    };
  });
  return updateObject(state, { workflows: newWorkflows, workflowNames: newWorkflowNames });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WORKFLOWS: return getWorkflows(state, action);
    default: return state;
  }
};

export default reducer;
