/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const abortProcess = () => {
  return {
    type: actionTypes.ABORT_PROCESS,
  };
};
