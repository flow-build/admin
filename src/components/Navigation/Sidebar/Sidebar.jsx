import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import * as UTIL from 'utils'
import { v4 as uuid_v4 } from 'uuid'

import Logo from './Logo'
import NavItem from './NavItem/NavItem'
import * as S from './styles'

const Sidebar = ({
  navItems,
  isSidebarExpanded,
  setIsSidebarExpanded,
  currentExpandedItem,
  setCurrentExpandedItem
}) => {
  useEffect(() => {
    UTIL.Components.handleSidebarExpanded(isSidebarExpanded)
  }, [isSidebarExpanded])

  return (
    <S.Container isSidebarExpanded={isSidebarExpanded}>
      <Logo isSidebarExpanded={isSidebarExpanded} />
      <S.NavItems>
        {navItems?.map((navItem) => (
          <NavItem
            navItem={navItem}
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
            currentExpandedItem={currentExpandedItem}
            setCurrentExpandedItem={setCurrentExpandedItem}
            key={uuid_v4()}
          />
        ))}
      </S.NavItems>
    </S.Container>
  )
}

Sidebar.propTypes = {
  navItems: PropTypes.array.isRequired,
  isSidebarExpanded: PropTypes.bool.isRequired,
  setIsSidebarExpanded: PropTypes.func.isRequired,
  currentExpandedItem: PropTypes.bool.isRequired,
  setCurrentExpandedItem: PropTypes.func.isRequired
}

export default Sidebar
