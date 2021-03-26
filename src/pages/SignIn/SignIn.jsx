import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Redirect } from 'react-router-dom'

import * as C from 'components'
import { useAuthContext } from 'contexts'

import * as S from './styles'

const SignIn = () => {
  const { isSignedIn, signIn } = useAuthContext()

  const handleSignIn = (event) => {
    event.preventDefault()
    signIn()
  }

  return (
    <S.Container>
      {isSignedIn ? (
        <Redirect to="/user" />
      ) : (
        <>
          <S.Title>SignIn</S.Title>

          <S.Form onSubmit={handleSignIn}>
            <C.UI.TextField name="name" placeholder="Nome" type="text" />

            <C.UI.TextField
              name="password"
              placeholder="Senha"
              type="password"
            />

            <C.UI.Button icon={<RiCheckboxCircleFill />} fullWidth>
              Sign In
            </C.UI.Button>
          </S.Form>
        </>
      )}
    </S.Container>
  )
}

export default SignIn
