/* eslint-disable arrow-body-style */
import * as action from '../actions';
import axiosInstance from '../axios';

export const getProcesses = (workflowId) => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.get(`/workflows/${workflowId}/processes`).then((response) => {
      if (response.status === 401) {
        dispatch(action.logoutUser());
        return;
      }
      dispatch(action.getProcesses(response.data));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(action.loadingEnd());
    });
  };
};
