/* eslint-disable arrow-body-style */
import axiosInstance from '../axios';
import { updateObject } from '../utility';
import * as actionTypes from './actionTypes';

export const authStart = (token) => updateObject({ type: actionTypes.AUTH_START, token });

export const auth = (setIsAuth) => {
  return async (dispatch) => {
    await axiosInstance.get('/anonymousToken').then((response) => {
      dispatch(authStart(response.data.jwtToken));
      setIsAuth(true);
    }).catch((err) => {
      console.log(err);
    });
  };
};
