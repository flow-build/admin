/* eslint-disable arrow-body-style */
import * as action from '../actions';
import axiosInstance from '../axios';

export const getWorkflows = () => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.get('/cockpit/workflows/stats').then((response) => {
      if (response.status === 401) {
        action.logoutUser();
        return;
      }
      dispatch(action.getWorkflows(response.data.workflows));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(action.loadingEnd());
    });
  };
};
