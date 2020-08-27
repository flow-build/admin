import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import { tokenSelector, setAuthHeader } from './redux/axios';
import store from './redux/store';
import './index.scss';


store.subscribe(() => {
  const token = tokenSelector(store.getState());
  setAuthHeader(token);
});

const Init = () => <Provider store={store}><App /></Provider>;

render(
  <Init />, document.getElementById('app'),
);
