/* eslint-disable arrow-body-style */
import axiosInstance from '../axios';
import { updateObject } from '../utility';
import * as actionTypes from './actionTypes';

export const getStatesSuccess = (states) => updateObject({ type: actionTypes.GET_STATES, states });
export const loadingStart = () => updateObject({ type: actionTypes.LOADING_START });
export const loadingEnd = () => updateObject({ type: actionTypes.LOADING_END });

export const getStatesStart = (processId) => {
  return async (dispatch) => {
    dispatch(loadingStart());
    await axiosInstance.get(`/processes/${processId}/history`).then((response) => {
      dispatch(getStatesSuccess(response.data));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(loadingEnd());
    });
  };
};
