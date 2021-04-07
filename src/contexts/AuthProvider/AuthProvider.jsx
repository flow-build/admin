import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

import PropTypes from 'prop-types'
import * as API from 'services/Loaders'
import useLocalStorage from 'utils/hooks/useLocalStorage'

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage(
    process.env.REACT_APP_KEY_USER
  )
  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage(
    process.env.REACT_APP_KEY_TOKEN
  )

  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (storageUser && storageToken) {
      setUser(storageUser)
    }
    setIsLoading(false)
  }, [])

  const signIn = useCallback(async () => {
    setIsLoading(true)
    const response = await API.loadAuthData()
    setUser(response.user)
    setStorageUser(response.user)
    setStorageToken(response.token)
    setIsLoading(false)
  }, [])

  const signOut = useCallback(() => {
    setIsLoading(true)
    removeStorageUser()
    removeStorageToken()
    setUser()
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: user ? true : false,
        user,
        signIn,
        signOut,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
