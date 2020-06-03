/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const getWorkflows = (workflows) => {
  return {
    type: actionTypes.GET_WORKFLOWS,
    workflows,
  };
};