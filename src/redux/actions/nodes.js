/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const getParsedNodes = (nodes) => {
  return {
    type: actionTypes.GET_NODES,
    nodes,
  };
};
