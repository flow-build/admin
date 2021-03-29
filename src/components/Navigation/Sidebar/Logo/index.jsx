import React from 'react'

import { useNavigationContext } from 'components/Navigation/NavigationProvider'

import * as S from './styles'

const Logo = () => {
  const { isSidebarExpanded } = useNavigationContext()
  return (
    <S.Container isSidebarExpanded={isSidebarExpanded}>
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
      {isSidebarExpanded && <S.Text>Logo</S.Text>}
    </S.Container>
  )
}

export default Logo
