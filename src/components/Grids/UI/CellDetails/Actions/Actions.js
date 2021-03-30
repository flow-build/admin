import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import PropTypes from 'prop-types'

import * as S from './styles'

const Actions = ({ cellContent, setCellContent }) => {
  const handleCloseCellDetails = (event) => {
    event.preventDefault()
    setCellContent(null)
  }

  console.log('cellContent', cellContent)

  return (
    <S.Container>
      <S.Close onClick={handleCloseCellDetails}>
        <AiOutlineCloseCircle />
      </S.Close>
    </S.Container>
  )
}

Actions.propTypes = {
  cellContent: PropTypes.any.isRequired,
  setCellContent: PropTypes.func.isRequired
}

export default Actions
