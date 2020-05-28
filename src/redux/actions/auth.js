/* eslint-disable arrow-body-style */
import axiosInstance from '../axios';
import { updateObject } from '../utility';
import * as actionTypes from './actionTypes';

const authStart = (token) => updateObject({ type: actionTypes.AUTH_START, token });
const logoutStart = () => updateObject({ type: actionTypes.LOGOUT_START });
const loadingStart = () => updateObject({ type: actionTypes.LOADING_START });
const loadingEnd = () => updateObject({ type: actionTypes.LOADING_END });

export const auth = () => {
  return async (dispatch) => {
    dispatch(loadingStart());
    await axiosInstance.get('/anonymousToken').then((response) => {
      localStorage.setItem('token', response.data.jwtToken);
      localStorage.setItem('expirationDate', new Date(response.data.payload.exp * 1000));
      dispatch(authStart(response.data.jwtToken));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(loadingEnd());
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    dispatch(logoutStart());
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    if (!token || expirationDate < new Date()) {
      dispatch(logout());
    } else {
      dispatch(authStart(token));
    }
  };
};
