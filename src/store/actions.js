/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
import axios from '../utils/axios';

export const AUTH_START = 'AUTH_START';

export const authStart = (token) => {
  return {
    type: AUTH_START,
    token: token,
  };
};

export const auth = (setIsAuth) => {
  return async (dispatch) => {
    await axios.get('/anonymousToken').then((response) => {
      dispatch(authStart(response.data.jwtToken));
      setIsAuth(true);
    }).catch((err) => {
      console.log(err);
    });
  };
};
