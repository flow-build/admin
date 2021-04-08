import React from 'react'

// import * as C from 'components'
import Card from 'components/UI/Card/Card'

import * as S from './styles'

const BlueprintManager = () => {
  return (
    <S.Container>
      <h1>BlueprintManager</h1>
      {/* <S.Card> */}
      <Card type="P" />
      {/* </S.Card> */}
      {/* <S.Card> */}
      <Card type="M" />
      {/* </S.Card> */}
    </S.Container>
  )
}

export default BlueprintManager
