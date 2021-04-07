import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import PropTypes from 'prop-types'

import Search from './Search/Search'
import * as S from './styles'

const Header = ({ setContent, currentCell, setCurrentCell }) => {
  return (
    <S.Container>
      <Search setContent={setContent} currentCell={currentCell} />

      <S.CloseButton onClick={() => setCurrentCell(null)}>
        <AiOutlineCloseCircle />
      </S.CloseButton>
    </S.Container>
  )
}

Header.propTypes = {
  currentCell: PropTypes.any,
  setCurrentCell: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
}

export default Header
