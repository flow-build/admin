import React from 'react'

import * as C from 'components'
import { useNavigationContext } from 'components/Navigation/NavigationProvider'
import PropTypes from 'prop-types'

import * as S from './styles'
import SubItems from './SubItems/SubItems'

const NavItem = ({ navItem }) => {
  const {
    isSidebarExpanded,
    setIsSidebarExpanded,
    currentExpandedSidebarItem,
    setCurrentExpandedSidebarItem
  } = useNavigationContext()

  const handleClick = (event) => {
    event.preventDefault()
    setIsSidebarExpanded(true)
    setCurrentExpandedSidebarItem(
      currentExpandedSidebarItem === navItem?.id ? null : navItem?.id
    )
  }

  return (
    <>
      <S.Container>
        {navItem?.path ? (
          <C.UI.Link url={navItem.path}>
            <S.LinkContent>
              <C.UI.Tooltip
                title={!isSidebarExpanded ? navItem?.title : ''}
                placement="right"
                hasArrow
              >
                <S.Icon>{navItem?.icon}</S.Icon>
              </C.UI.Tooltip>

              {isSidebarExpanded && <S.Title>{navItem?.title || '*'}</S.Title>}
            </S.LinkContent>
          </C.UI.Link>
        ) : (
          <>
            <S.LinkContent onClick={handleClick}>
              <C.UI.Tooltip
                title={!isSidebarExpanded ? navItem?.title : ''}
                placement="right"
                hasArrow
              >
                <S.Icon>{navItem?.icon}</S.Icon>
              </C.UI.Tooltip>

              {isSidebarExpanded && <S.Title>{navItem?.title || '*'}</S.Title>}
            </S.LinkContent>

            {isSidebarExpanded &&
              currentExpandedSidebarItem === navItem?.id && (
                <SubItems subItems={navItem?.subItems} />
              )}
          </>
        )}
      </S.Container>
    </>
  )
}

NavItem.propTypes = {
  navItem: PropTypes.object
}

export default NavItem
