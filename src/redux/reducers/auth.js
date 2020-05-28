import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
};

const authStart = (state, action) => updateObject(state, { token: action.token });
const logoutStart = (state) => updateObject(state, { token: null });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.LOGOUT_START: return logoutStart(state);
    default: return state;
  }
};

export default reducer;
