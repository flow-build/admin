import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { useAuthContext } from 'contexts/AuthProvider/AuthProvider'
import PrivateRoute from 'routes/PrivateRoute'

const SignIn = lazy(() => import('pages/SignIn/SignIn'))
const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'))
const Home = lazy(() => import('pages/Home/Home'))
const Error404 = lazy(() => import('pages/Error404/Error404'))
const ProcessMonitoring = lazy(() =>
  import('pages/ProcessMonitoring/ProcessMonitoring')
)

const Routes = () => {
  const { signOut } = useAuthContext()

  return (
    <Suspense fallback={false}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute
          exact
          path="/monitoring/process"
          component={ProcessMonitoring}
        />
        <Route
          exact
          path="/logout"
          render={() => {
            signOut()
            return <Redirect to="/signin" />
          }}
        />

        <Route path="*" component={Error404} />
      </Switch>
    </Suspense>
  )
}

export default Routes
