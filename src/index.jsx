import React from 'react';
import { render } from 'react-dom';
import '../index.scss';

import App from './app';

const Init = () => <App />;

render(
  <Init />, document.getElementById('app'),
);
