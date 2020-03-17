/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import history from '@utils/history';

import routes from '@routes';

// eslint-disable-next-line react/prop-types
function App() {
  return (
    <>
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
        </Suspense>
      </Router>
    </>
  );
}

export default App;
