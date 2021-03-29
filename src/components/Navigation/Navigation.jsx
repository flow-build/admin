import React from 'react'

import { useAuthContext } from 'contexts/AuthProvider/AuthProvider'

import Headerbar from './Headerbar/Headerbar'
import * as NavigationData from './NavigationData'
import NavigationProvider from './NavigationProvider'
import Sidebar from './Sidebar/Sidebar'
import * as S from './styles'

const Navigation = () => {
  const { isSignedIn } = useAuthContext()

  return (
    <NavigationProvider>
      <S.Container>
        <Sidebar
          navItems={
            isSignedIn
              ? NavigationData.sidebarLoggedIn
              : NavigationData.sidebarNotLoggedIn
          }
        />
        <Headerbar navItems={NavigationData.headerbar} />
      </S.Container>
    </NavigationProvider>
  )
}

export default Navigation
