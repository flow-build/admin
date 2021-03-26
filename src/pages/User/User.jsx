import React from 'react'

import * as C from 'components'
import { useAuthContext } from 'contexts/AuthProvider/AuthProvider'

import * as S from './styles'

const User = () => {
  const { user, signOut } = useAuthContext()

  const handleSignOut = (event, signOut) => {
    event.preventDefault()
    signOut()
  }

  return (
    <S.Container>
      <S.Section>
        <S.UserName>{user}</S.UserName>

        <C.UI.Button onClick={(e) => handleSignOut(e, signOut)} fullWidth>
          Sign out
        </C.UI.Button>
      </S.Section>
    </S.Container>
  )
}

export default User
