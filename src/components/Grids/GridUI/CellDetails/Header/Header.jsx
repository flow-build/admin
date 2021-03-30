import React from 'react'

import PropTypes from 'prop-types'

import CloseButton from './CloseButton/CloseButton'
import Search from './Search/Search'
import * as S from './styles'

const Header = ({ setContent, currentCell, setCurrentCell }) => {
  return (
    <S.Container>
      <Search setContent={setContent} currentCell={currentCell} />

      <CloseButton setCurrentCell={setCurrentCell} />
    </S.Container>
  )
}

Header.propTypes = {
  currentCell: PropTypes.any,
  setCurrentCell: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
}

export default Header
