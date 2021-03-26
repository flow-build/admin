import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const NavItem = ({ navItem, isSidebarExpanded, setIsSidebarExpanded }) => {
  const handleClick = (event) => {
    event.preventDefault()
    setIsSidebarExpanded(true)
  }

  return (
    <S.Container onClick={handleClick}>
      <S.Icon>{navItem?.icon}</S.Icon>
      {isSidebarExpanded && <S.Title>{navItem?.title || ''}</S.Title>}
    </S.Container>
  )
}

NavItem.propTypes = {
  navItem: PropTypes.object,
  isSidebarExpanded: PropTypes.bool.isRequired,
  setIsSidebarExpanded: PropTypes.func.isRequired
}

export default NavItem
