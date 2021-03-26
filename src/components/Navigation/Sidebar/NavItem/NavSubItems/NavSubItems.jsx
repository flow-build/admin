import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const NavSubItems = ({ subItems }) => {
  console.log('subItems', subItems)
  return <S.Container></S.Container>
}

NavSubItems.propTypes = {
  subItems: PropTypes.array.isRequired
}

export default NavSubItems
