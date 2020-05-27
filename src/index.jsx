import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import App from './app';
import { tokenSelector, setAuthHeader } from './redux/axios';
import authReducer from './redux/reducers/auth';
import genericReducer from './redux/reducers/genericReducer';
import processesReducer from './redux/reducers/processes';
import workflowReducer from './redux/reducers/workflow';
import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  workflow: workflowReducer,
  processes: processesReducer,
  generic: genericReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

store.subscribe(() => {
  const token = tokenSelector(store.getState());
  setAuthHeader(token);
});

const Init = () => <Provider store={store}><App /></Provider>;

render(
  <Init />, document.getElementById('app'),
);
