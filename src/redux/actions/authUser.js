/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const authUser = (token) => {
  return {
    type: actionTypes.AUTH_START,
    token,
  };
};
