import React from 'react'

import * as C from 'components'
import PropTypes from 'prop-types'

import * as S from './styles'
import SubItems from './SubItems/SubItems'

const NavItem = ({
  navItem,
  isSidebarExpanded,
  setIsSidebarExpanded,
  currentExpandedItem,
  setCurrentExpandedItem
}) => {
  const handleClick = (event) => {
    event.preventDefault()
    setIsSidebarExpanded(true)
    setCurrentExpandedItem(
      currentExpandedItem === navItem?.id ? null : navItem.id
    )
  }

  return (
    <S.Container>
      {navItem?.path ? (
        <C.UI.Link url={navItem.path}>
          <S.LinkContent>
            <S.Icon>{navItem?.icon}</S.Icon>
            {isSidebarExpanded && <S.Title>{navItem?.title || ''}</S.Title>}
          </S.LinkContent>
        </C.UI.Link>
      ) : (
        <>
          <S.LinkContent onClick={handleClick}>
            <S.Icon>{navItem?.icon}</S.Icon>
            {isSidebarExpanded && <S.Title>{navItem?.title || ''}</S.Title>}
          </S.LinkContent>

          {isSidebarExpanded && currentExpandedItem === navItem?.id && (
            <SubItems
              subItems={navItem?.subItems}
              key={`${isSidebarExpanded}-${currentExpandedItem}-${navItem?.id}`}
            />
          )}
        </>
      )}
    </S.Container>
  )
}

NavItem.propTypes = {
  navItem: PropTypes.object,
  isSidebarExpanded: PropTypes.bool.isRequired,
  setIsSidebarExpanded: PropTypes.func.isRequired,
  currentExpandedItem: PropTypes.bool.isRequired,
  setCurrentExpandedItem: PropTypes.func.isRequired
}

export default NavItem
