import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from 'routes/PrivateRoute'

const SignIn = lazy(() => import('pages/SignIn'))
const Dashboard = lazy(() => import('pages/Dashboard'))
const User = lazy(() => import('pages/User'))
const Error404 = lazy(() => import('pages/Error404'))

const Routes = () => (
  <Suspense fallback={false}>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signin" exact component={SignIn} />

      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/user" exact component={User} />

      <Route path="*" component={Error404} />
    </Switch>
  </Suspense>
)

export default Routes
