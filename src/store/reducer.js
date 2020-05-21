/* eslint-disable arrow-body-style */
// import axios from '../utils/axios';
import * as actionTypes from './actions';

const initialState = {
  token: null,
};

const authStart = (state, action) => {
  return {
    ...state,
    token: action.token,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    default: return state;
  }
};

export default reducer;
