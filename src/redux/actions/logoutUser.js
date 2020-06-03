/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_START,
  };
};
