/* eslint-disable arrow-body-style */
import * as action from '../actions';
import axiosInstance from '../axios';

export const auth = () => {
  return async (dispatch) => {
    dispatch(action.loadingStart());
    await axiosInstance.get('/anonymousToken').then((response) => {
      localStorage.setItem('token', response.data.jwtToken);
      localStorage.setItem('expirationDate', new Date(response.data.payload.exp * 1000));
      dispatch(action.authUser(response.data.jwtToken));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(action.loadingEnd());
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    dispatch(action.logoutUser());
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    if (new Date(expirationDate).getTime() < new Date().getTime()) {
      dispatch(logout());
    } else {
      dispatch(action.authUser(token));
    }
  };
};
