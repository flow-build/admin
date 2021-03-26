import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import PropTypes from 'prop-types'

import * as S from './styles'

const Headerbar = ({ navItems, isSidebarExpanded, setIsSidebarExpanded }) => {
  console.log('navItems', navItems)
  return (
    <S.Container>
      <S.Toggle
        isSidebarExpanded={isSidebarExpanded}
        onClick={() => setIsSidebarExpanded((prev) => !prev)}
      >
        {isSidebarExpanded ? <GrClose /> : <GiHamburgerMenu />}
      </S.Toggle>
    </S.Container>
  )
}

Headerbar.propTypes = {
  navItems: PropTypes.array.isRequired,
  isSidebarExpanded: PropTypes.bool.isRequired,
  setIsSidebarExpanded: PropTypes.func.isRequired
}

export default Headerbar
