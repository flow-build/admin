/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const getState = (states) => {
  return {
    type: actionTypes.GET_STATES,
    states,
  };
};
