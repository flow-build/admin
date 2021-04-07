import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useGridContext } from 'components/Grids/GridProvider'
import PropTypes from 'prop-types'

import * as S from './styles'

const ColumnHeader = ({ displayName, column }) => {
  const { setCurrentField } = useGridContext()

  const handleColumnKeys = (event) => {
    event.preventDefault()

    const field = column?.colDef?.field
    setCurrentField(field)
  }

  return (
    <S.Container>
      <S.Name>{displayName}</S.Name>

      <S.Icon onClick={handleColumnKeys}>
        <GiHamburgerMenu />
      </S.Icon>
    </S.Container>
  )
}

ColumnHeader.propTypes = {
  displayName: PropTypes.string,
  column: PropTypes.object,
}

export default ColumnHeader
