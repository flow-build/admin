import React, { Suspense, useEffect } from 'react';
import ReactNotification from 'react-notifications-component';
import { useDispatch } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import history from '@utils/history';

import MainPage from './pages/main';
import { authCheckState } from './redux/middleware/auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);
  return (
    <>
      <ReactNotification />
      <Router history={history}>
        <Suspense>
          <Route
            path="/"
            component={MainPage}
          />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
