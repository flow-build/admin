/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const getBlueprint = (nodes) => {
  return {
    type: actionTypes.GET_BLUEPRINT_WORKFLOW,
    nodes,
  };
};
