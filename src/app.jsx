/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

import history from '@utils/history';


import MainPage from './pages/main';

// eslint-disable-next-line react/prop-types
function App() {
  return (
    <Router history={history}>
      <Suspense>
        <Route
          path="/"
          component={MainPage}
        />
        <Redirect to="/login" />
      </Suspense>
    </Router>
  );
}

export default App;
