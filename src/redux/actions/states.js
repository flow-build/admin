/* eslint-disable arrow-body-style */
import axiosInstance from '../axios';
import { updateObject } from '../utility';
import * as actionTypes from './actionTypes';

export const getStatesSuccess = (states) => updateObject({ type: actionTypes.GET_STATES, states });
export const abortProcessSuccess = () => updateObject({ type: actionTypes.ABORT_PROCESS });
export const getBlueprintWorkflowSuccess = (nodes) => updateObject({ type: actionTypes.GET_BLUEPRINT_WORKFLOW, nodes });
export const createNewProcessSuccess = () => updateObject({ type: actionTypes.CREATE_NEW_PROCESS });
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

export const abortProcessStart = (processId) => {
  return async (dispatch) => {
    dispatch(loadingStart());
    await axiosInstance.post(`/processes/${processId}/abort`).then((response) => {
      if (response.data.status === 200) dispatch(abortProcessSuccess());
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(loadingEnd());
    });
  };
};

export const getBlueprintWorkflowStart = (workflowId) => {
  return async (dispatch) => {
    await axiosInstance.get(`/workflows/${workflowId}`).then((response) => {
      dispatch(getBlueprintWorkflowSuccess(response.data.blueprint_spec.nodes));
    }).catch((err) => {
      console.log(err);
    });
  };
};


export const createNewProcessStart = (newWorkflowName, process) => {
  return async (dispatch) => {
    dispatch(loadingStart());
    await axiosInstance.post(`/workflows/name/${newWorkflowName}/create`)
      .then(async (response) => {
        await axiosInstance.post(`/cockpit/processes/${response.data.process_id}/state`, process).catch((err) => console.log(err));
        await axiosInstance.post(`/processes/${response.data.process_id}/run`).catch((err) => console.log(err));
        dispatch(createNewProcessSuccess());
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        dispatch(loadingEnd());
      });
  };
};
