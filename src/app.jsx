import React, { Suspense } from 'react';
<<<<<<< Updated upstream
import { useSelector, useDispatch } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import history from '@utils/history';

import routes from '@routes';
=======
import ReactNotification from 'react-notifications-component';
import { Router, Route, Redirect } from 'react-router-dom';

import history from '@utils/history';

import MainPage from './pages/main';
>>>>>>> Stashed changes

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <Router history={history}>
        <Suspense>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
=======
      <ReactNotification />
      <Router history={history}>
        <Suspense>
          <Route
            path="/"
            component={MainPage}
          />
          <Redirect to="/login" />
>>>>>>> Stashed changes
        </Suspense>
      </Router>
    </>
  );
}

export default App;
