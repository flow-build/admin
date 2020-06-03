/* eslint-disable arrow-body-style */
import notification from '../../utils/notification';
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
      if (err.response) {
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
