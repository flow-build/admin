/* eslint-disable arrow-body-style */
import axiosInstance from '../axios';
import { updateObject } from '../utility';
import * as actionTypes from './actionTypes';

export const getWorkflowsSuccess = (workflows) => updateObject({ type: actionTypes.GET_WORKFLOWS, workflows });

export const getWorkflowsStart = () => {
  // start loading
  return async (dispatch) => {
    await axiosInstance.get('/cockpit/workflows/stats').then((response) => {
      dispatch(getWorkflowsSuccess(response.data.workflows));
      // finalizar o loading no finally
    }).catch((err) => {
      console.log(err);
    });
  };
};
