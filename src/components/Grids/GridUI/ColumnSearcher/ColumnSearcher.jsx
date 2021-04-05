import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import PropTypes from 'prop-types'

import * as S from './styles'

const ColumnSearcher = ({ displayName, ...props }) => {
  console.log('displayName', displayName)
  console.log('props', props)

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <S.Container>
      <S.Name className="customHeaderLabel">{displayName}</S.Name>

      <S.Icon onClick={handleClick}>
        <GiHamburgerMenu />
      </S.Icon>
    </S.Container>
  )
}

ColumnSearcher.propTypes = {
  displayName: PropTypes.any,
}

export default ColumnSearcher
