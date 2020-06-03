/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const loadingStart = () => {
  return {
    type: actionTypes.LOADING_START,
  };
};

export const loadingEnd = () => {
  return {
    type: actionTypes.LOADING_END,
  };
};
