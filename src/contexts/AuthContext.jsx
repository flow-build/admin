import React, { createContext, useState, useEffect, useCallback } from 'react'

import PropTypes from 'prop-types'
import { getAuthData } from 'services/auth'
import useLocalStorage from 'utils/hooks/useLocalStorage'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage(
    process.env.REACT_APP_KEY_USER
  )
  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage(
    process.env.REACT_APP_KEY_TOKEN
  )

  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (storageUser && storageToken) {
      setUser(storageUser)
    }
    setLoading(false)
  }, [])

  const signIn = useCallback(async () => {
    setLoading(true)
    const response = await getAuthData()
    setUser(response.user)
    setStorageUser(response.user)
    setStorageToken(response.token)
    setLoading(false)
  }, [])

  const signOut = useCallback(() => {
    setLoading(true)
    removeStorageUser()
    removeStorageToken()
    setUser()
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signed: user ? true : false,
        user,
        signIn,
        signOut,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthContext
