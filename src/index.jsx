import React from 'react';
import { render } from 'react-dom';
<<<<<<< Updated upstream
import '../index.scss';
=======
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.scss';
>>>>>>> Stashed changes

import App from './app';
import reducer from './store/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

const Init = () => <Provider store={store}><App /></Provider>;

render(
  <Init />, document.getElementById('app'),
);
