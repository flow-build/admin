/* eslint-disable arrow-body-style */
import axiosInstance from '../axios';
import { updateObject } from '../utility';
import * as actionTypes from './actionTypes';
import { logout } from './auth';

export const getProcessesSuccess = (processes) => updateObject({ type: actionTypes.GET_PROCESSES, processes });
export const loadingStart = () => updateObject({ type: actionTypes.LOADING_START });
export const loadingEnd = () => updateObject({ type: actionTypes.LOADING_END });

export const getProcessesStart = (workflowId) => {
  return async (dispatch) => {
    dispatch(loadingStart());
    await axiosInstance.get(`/workflows/${workflowId}/processes`).then((response) => {
      if (response.status === 401) {
        dispatch(logout());
        return;
      }
      dispatch(getProcessesSuccess(response.data));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(loadingEnd());
    });
  };
};
