/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const getWorkflows = (workflows) => {
  return {
    type: actionTypes.GET_WORKFLOWS,
    workflows,
  };
};

export const getWorkflow = (workflow) => {
  return {
    type: actionTypes.GET_WORKFLOW,
    workflow,
  };
};
