import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const GridContainer = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default GridContainer
