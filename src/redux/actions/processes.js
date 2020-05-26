/* eslint-disable arrow-body-style */
import axiosInstance from '../axios';
import { updateObject } from '../utility';
import * as actionTypes from './actionTypes';

export const getProcessesSuccess = (processes) => updateObject({ type: actionTypes.GET_PROCESSES, processes });

export const getProcessesStart = (workflowId) => {
  return async (dispatch) => {
    await axiosInstance.get(`/workflows/${workflowId}/processes`).then((response) => {
      dispatch(getProcessesSuccess(response.data));
    }).catch((err) => {
      console.log(err);
    });
  };
};
