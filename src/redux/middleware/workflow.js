/* eslint-disable arrow-body-style */
import notification from '../../utils/notification';
import * as action from '../actions';
import axiosInstance from '../axios';

export const getWorkflows = () => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.get('/cockpit/workflows/stats').then((response) => {
      dispatch(action.getWorkflows(response.data.workflows));
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

export const getWorkflow = (workflowId) => {
  return async (dispatch) => {
    await axiosInstance.get(`/workflows/${workflowId}`).then((response) => {
      dispatch(action.getWorkflow(response.data));
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
    });
  };
};
