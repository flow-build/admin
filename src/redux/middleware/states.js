/* eslint-disable arrow-body-style */
import notification from '../../utils/notification';
import * as action from '../actions';
import axiosInstance from '../axios';

export const getState = (processId) => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.get(`/processes/${processId}/history`).then((response) => {
      dispatch(action.getState(response.data));
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

export const abortProcess = (processId) => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.post(`/processes/${processId}/abort`).then(() => {
      dispatch(action.abortProcess());
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

export const getBlueprint = (workflowId) => {
  return async (dispatch) => {
    await axiosInstance.get(`/workflows/${workflowId}`).then((response) => {
      dispatch(action.getBlueprint(response.data.blueprint_spec.nodes));
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

export const setState = (processId, process) => {
  return async (dispatch) => {
    await axiosInstance.post(`/cockpit/processes/${processId}/state/`, process).then(() => {
      dispatch(action.loadingStart());
      axiosInstance.post(`/cockpit/processes/${processId}/state/run`).catch((err) => notification(
        'Erro ao realizar a solicitação ao servidor',
        err.message,
        'danger',
        4000,
      ));
      dispatch(action.setState());
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

export const createProcess = (newWorkflowName, process) => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.post(`/workflows/name/${newWorkflowName}/create`)
      .then(async (response) => {
        await axiosInstance.post(`/cockpit/processes/${response.data.process_id}/state`, process).catch((err) => notification(
          'Erro ao realizar a solicitação ao servidor',
          err.message,
          'danger',
          4000,
        ));
        await axiosInstance.post(`/cockpit/processes/${response.data.process_id}/state/run`).catch((err) => notification(
          'Erro ao realizar a solicitação ao servidor',
          err.message,
          'danger',
          4000,
        ));
        dispatch(action.createProcess());
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
