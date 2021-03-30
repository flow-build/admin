import React, { useEffect } from 'react'

import { useNavigationContext } from 'components/Navigation/NavigationProvider'
import PropTypes from 'prop-types'
import * as UTIL from 'utils'
import { v4 as uuid_v4 } from 'uuid'

import Logo from './Logo'
import NavItem from './NavItem/NavItem'
import * as S from './styles'

const Sidebar = ({ navItems }) => {
  const { isSidebarExpanded } = useNavigationContext()

  useEffect(() => {
    UTIL.Components.handleSidebarExpanded(isSidebarExpanded)
  }, [isSidebarExpanded])

  return (
    <S.Container isSidebarExpanded={isSidebarExpanded}>
      <Logo />
      <S.NavItems>
        {navItems?.map((navItem) => (
          <NavItem navItem={navItem} key={uuid_v4()} />
        ))}
      </S.NavItems>
    </S.Container>
  )
}

Sidebar.propTypes = {
  navItems: PropTypes.array.isRequired,
}

export default Sidebar
