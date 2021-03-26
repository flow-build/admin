import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import PropTypes from 'prop-types'

import * as S from './styles'

const Headerbar = ({
  navItems,
  isSidebarExpanded,
  setIsSidebarExpanded,
  setCurrentExpandedItem
}) => {
  console.log('navItems', navItems)

  const handleClick = (event) => {
    event.preventDefault()
    setIsSidebarExpanded((prev) => !prev)
    setCurrentExpandedItem(null)
  }
  return (
    <S.Container>
      <S.Toggle isSidebarExpanded={isSidebarExpanded} onClick={handleClick}>
        {isSidebarExpanded ? <GrClose /> : <GiHamburgerMenu />}
      </S.Toggle>
    </S.Container>
  )
}

Headerbar.propTypes = {
  navItems: PropTypes.array.isRequired,
  isSidebarExpanded: PropTypes.bool.isRequired,
  setIsSidebarExpanded: PropTypes.func.isRequired,
  setCurrentExpandedItem: PropTypes.func.isRequired
}

export default Headerbar
