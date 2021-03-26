import React from 'react'

import * as S from './styles'

const Logo = () => {
  return (
    <S.Container>
      <S.Image
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6.5"
          width="36"
          height="36"
          rx="12"
          stroke="#0062ff"
          strokeWidth="6"
        />
        <rect
          x="19.5"
          y="8"
          width="18"
          height="18"
          rx="9"
          stroke="#0062ff"
          strokeWidth="6"
        />
      </S.Image>
      <S.Text>Logo</S.Text>
    </S.Container>
  )
}

export default Logo
