import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import genericReducer from './reducers/genericReducer';
import nodesReducer from './reducers/nodes';
import processesReducer from './reducers/processes';
import statesReducer from './reducers/states';
import workflowReducer from './reducers/workflow';

const rootReducer = combineReducers({
  auth: authReducer,
  generic: genericReducer,
  processes: processesReducer,
  states: statesReducer,
  workflow: workflowReducer,
  nodes: nodesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
