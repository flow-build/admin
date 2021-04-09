import React from 'react'

import * as C from 'components'

import * as S from './styles'

const BlueprintManager = () => {
  return (
    <S.Container>
      <h1>BlueprintManager</h1>
      <S.Card>
        <C.UI.Card type="P" />
      </S.Card>
      <S.Card>
        <C.UI.Card type="M" />
      </S.Card>
    </S.Container>
  )
}

export default BlueprintManager
