import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import PropTypes from 'prop-types'

import * as S from './styles'

const CloseButton = ({ setCurrentCell }) => {
  const handleCloseCellDetails = (event) => {
    event.preventDefault()
    setCurrentCell(null)
  }

  return (
    <S.Container onClick={handleCloseCellDetails}>
      <AiOutlineCloseCircle />
    </S.Container>
  )
}

CloseButton.propTypes = {
  setCurrentCell: PropTypes.func.isRequired,
}

export default CloseButton
