import React, { useState } from 'react'

import { useAuthContext } from 'contexts/AuthProvider/AuthProvider'

import Headerbar from './Headerbar/Headerbar'
import { sidebarData, headerbarData } from './NavigationData'
import Sidebar from './Sidebar/Sidebar'
import * as S from './styles'

const Navigation = () => {
  const { isSignedIn } = useAuthContext()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  if (!isSignedIn) return null
  return (
    <S.Container>
      <Sidebar
        navItems={sidebarData}
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />
      <Headerbar
        navItems={headerbarData}
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />
    </S.Container>
  )
}

export default Navigation
