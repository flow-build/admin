/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const getProcesses = (processes) => {
  return {
    type: actionTypes.GET_PROCESSES,
    processes,
  };
};
