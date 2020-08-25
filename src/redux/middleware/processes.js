/* eslint-disable arrow-body-style */
import notification from '../../utils/notification';
import * as action from '../actions';
import axiosInstance from '../axios';

export const getProcesses = (workflowId) => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.get(`/workflows/${workflowId}/processes`).then((response) => {
      dispatch(action.getProcesses(response.data));
    }).catch((err) => {
      if (err.response.status === 401) {
        action.logoutUser();
      } else if (err.response) {
        notification(
          'Erro ao realizar a solicitação ao servidor',
          err.message,
          'danger',
          4000,
        );
      }
    }).finally(() => {
      dispatch(action.loadingEnd());
    });
  };
};
