import React, { useState } from 'react'

import { useAuthContext } from 'contexts/AuthProvider/AuthProvider'

import Headerbar from './Headerbar/Headerbar'
import * as NavigationData from './NavigationData'
import Sidebar from './Sidebar/Sidebar'
import * as S from './styles'

const Navigation = () => {
  const { isSignedIn } = useAuthContext()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [currentExpandedItem, setCurrentExpandedItem] = useState(null)

  return (
    <S.Container>
      <Sidebar
        navItems={
          isSignedIn
            ? NavigationData.sidebarLoggedIn
            : NavigationData.sidebarNotLoggedIn
        }
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
        currentExpandedItem={currentExpandedItem}
        setCurrentExpandedItem={setCurrentExpandedItem}
      />
      <Headerbar
        navItems={NavigationData.headerbar}
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
        setCurrentExpandedItem={setCurrentExpandedItem}
      />
    </S.Container>
  )
}

export default Navigation
