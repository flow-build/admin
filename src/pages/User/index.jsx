import React, { useCallback } from 'react'

import Button from 'components/Button'
import Layout from 'components/Layout'
import Spinner from 'components/Spinner'
import PropTypes from 'prop-types'
import useAuth from 'utils/hooks/useAuth'

import * as S from './styles'

const User = ({ className, ...props }) => {
  const { user, signOut, loading } = useAuth()

  const handleSignOut = useCallback(() => {
    signOut()
  }, [signOut])

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  }

  return (
    <Layout>
      <S.Wrapper className={className} {...props}>
        <h1>{user}</h1>
        <br />
        <Button onClick={handleSignOut} fullWidth>
          Sign out
        </Button>
      </S.Wrapper>
    </Layout>
  )
}

User.propTypes = {
  className: PropTypes.string
}

User.defaultProps = {
  className: 'user'
}

export default User
