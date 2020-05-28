import React, { Suspense, useEffect } from 'react';
import ReactNotification from 'react-notifications-component';
import { useDispatch } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import history from '@utils/history';

import MainPage from './pages/main';
import * as actions from './redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.authCheckState());
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
