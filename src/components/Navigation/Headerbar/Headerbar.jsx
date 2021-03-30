import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import { useNavigationContext } from 'components/Navigation/NavigationProvider'
import PropTypes from 'prop-types'

import * as S from './styles'

const Headerbar = ({ navItems }) => {
  const {
    isSidebarExpanded,
    setIsSidebarExpanded,
    setCurrentExpandedSidebarItem,
  } = useNavigationContext()
  console.log('navItems', navItems)

  const handleClick = (event) => {
    event.preventDefault()
    setIsSidebarExpanded((prev) => !prev)
    setCurrentExpandedSidebarItem(null)
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
}

export default Headerbar
