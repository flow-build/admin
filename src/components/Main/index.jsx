import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Main = ({ children, className, ...props }) => {
  return (
    <S.Wrapper className={className} {...props}>
      {children}
    </S.Wrapper>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

Main.defaultProps = {
  className: 'main',
  children: ''
}

export default Main
