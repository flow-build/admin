import React from 'react'

import PropTypes from 'prop-types'

import Actions from './Actions/Actions'
import * as S from './styles'

const CellDetails = ({ cellContent, setCellContent }) => {
  return (
    <S.Container isVisible={!!cellContent}>
      {cellContent && (
        <>
          <Actions cellContent={cellContent} setCellContent={setCellContent} />
          <S.Content>{JSON.stringify(cellContent, undefined, 2)}</S.Content>
        </>
      )}
    </S.Container>
  )
}

CellDetails.propTypes = {
  cellContent: PropTypes.any.isRequired,
  setCellContent: PropTypes.func.isRequired,
}

export default CellDetails
