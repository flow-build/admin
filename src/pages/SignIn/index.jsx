import React, { useCallback } from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Redirect } from 'react-router-dom'

import Button from 'components/Button'
import Layout from 'components/Layout'
import Spinner from 'components/Spinner'
import TextField from 'components/TextField'
import PropTypes from 'prop-types'
import useAuth from 'utils/hooks/useAuth'

import * as S from './styles'

const SignIn = ({ className, ...props }) => {
  const { signed, signIn, loading } = useAuth()

  const handleSignIn = useCallback(() => {
    signIn()
  }, [signIn])

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  }

  return (
    <S.Wrapper className={className} {...props}>
      {signed ? (
        <Redirect to="./user" />
      ) : (
        <>
          <h1>SignIn</h1>
          <br />
          <S.Form onSubmit={handleSignIn}>
            <TextField name="name" placeholder="Nome" type="text" />
            <br />
            <TextField name="password" placeholder="Senha" type="password" />
            <br />
            <Button icon={<RiCheckboxCircleFill />} fullWidth>
              Sign In
            </Button>
          </S.Form>
        </>
      )}
    </S.Wrapper>
  )
}

SignIn.propTypes = {
  className: PropTypes.string
}

SignIn.defaultProps = {
  className: 'signin'
}

export default SignIn
