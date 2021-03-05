import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Error404 = ({ className, ...props }) => (
  <S.Wrapper className={className} {...props}>
    <h1>Error 404</h1>
  </S.Wrapper>
)

Error404.propTypes = {
  className: PropTypes.string
}

Error404.defaultProps = {
  className: 'error404'
}

export default Error404
