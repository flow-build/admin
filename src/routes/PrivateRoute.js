/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import * as C from 'components'
import { useAuthContext } from 'contexts/'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { isSignedIn, isLoading } = useAuthContext()

  if (isLoading) {
    return <C.UI.Spinner />
  }

  return (
    <Route
      {...props}
      render={() =>
        isSignedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  )
}

export default PrivateRoute
