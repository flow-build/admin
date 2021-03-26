import React from 'react'

import { useAuthContext } from 'contexts/AuthProvider/AuthProvider'

import * as S from './styles'

const User = () => {
  const { user } = useAuthContext()

  return (
    <S.Container>
      <S.Section>
        <S.UserName>{user}</S.UserName>
      </S.Section>
    </S.Container>
  )
}

export default User
