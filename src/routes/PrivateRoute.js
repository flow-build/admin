/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import Spinner from 'components/Spinner'
import useAuth from 'utils/hooks/useAuth'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { signed, loading } = useAuth()

  if (loading) {
    return <Spinner />
  }

  return (
    <Route
      {...props}
      render={() =>
        signed ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  )
}

export default PrivateRoute
