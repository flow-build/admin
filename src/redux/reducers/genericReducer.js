import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  loading: null,
};

const loadingStart = (state) => updateObject(state, { loading: true });
const loadingEnd = (state) => updateObject(state, { loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START: return loadingStart(state);
    case actionTypes.LOADING_END: return loadingEnd(state);
    default: return state;
  }
};

export default reducer;
