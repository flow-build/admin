/* eslint-disable arrow-body-style */
import * as action from '../actions';
import axiosInstance from '../axios';

export const getState = (processId) => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.get(`/processes/${processId}/history`).then((response) => {
      if (response.status === 401) {
        action.logoutUser();
        return;
      }
      dispatch(action.getState(response.data));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(action.loadingEnd());
    });
  };
};

export const abortProcess = (processId) => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.post(`/processes/${processId}/abort`).then((response) => {
      if (response.status === 401) {
        action.logoutUser();
        return;
      }
      dispatch(action.abortProcess());
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(action.loadingEnd());
    });
  };
};

export const getBlueprint = (workflowId) => {
  return async (dispatch) => {
    await axiosInstance.get(`/workflows/${workflowId}`).then((response) => {
      if (response.status === 401) {
        action.logoutUser();
        return;
      }
      dispatch(action.getBlueprint(response.data.blueprint_spec.nodes));
    }).catch((err) => {
      console.log(err);
    });
  };
};

export const setState = (processId, process) => {
  return async (dispatch) => {
    await axiosInstance.post(`/cockpit/processes/${processId}/state/`, process).then((response) => {
      dispatch(action.loadingStart());
      if (response.status === 401) {
        action.logoutUser();
        return;
      }
      axiosInstance.post(`/cockpit/processes/${processId}/state/run`).catch((err) => console.log(err));
      dispatch(action.setState());
    }).catch((err) => {
      console.log(err);
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
        if (response.status === 401) {
          action.logoutUser();
          return;
        }
        await axiosInstance.post(`/cockpit/processes/${response.data.process_id}/state`, process).catch((err) => console.log(err));
        await axiosInstance.post(`/cockpit/processes/${response.data.process_id}/state/run`).catch((err) => console.log(err));
        dispatch(action.createProcess());
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        dispatch(action.loadingEnd());
      });
  };
};
