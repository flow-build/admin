import React, { Suspense } from 'react';
import ReactNotification from 'react-notifications-component';
import { Router, Route, Redirect } from 'react-router-dom';

import history from '@utils/history';

import MainPage from './pages/main';

function App() {
  return (
    <>
      <ReactNotification />
      <Router history={history}>
        <Suspense>
          <Route
            path="/"
            component={MainPage}
          />
          <Redirect to="/login" />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
