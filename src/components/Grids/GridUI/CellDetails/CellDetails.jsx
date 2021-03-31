import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Content from './Content/Content'
import Header from './Header/Header'
import * as S from './styles'

const CellDetails = ({ currentCell, setCurrentCell }) => {
  const [content, setContent] = useState(null)

  return (
    <S.Container isVisible={!!currentCell}>
      {currentCell && (
        <>
          <Header
            setContent={setContent}
            currentCell={currentCell}
            setCurrentCell={setCurrentCell}
          />

          <Content content={content} currentCell={currentCell} />
        </>
      )}
    </S.Container>
  )
}

CellDetails.propTypes = {
  currentCell: PropTypes.any,
  setCurrentCell: PropTypes.func.isRequired,
}

export default CellDetails
