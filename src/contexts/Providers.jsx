import React from 'react'

import PropTypes from 'prop-types'

import AuthProvider from './AuthProvider/AuthProvider'

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers
