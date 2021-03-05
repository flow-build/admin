import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Sidebar = ({ className, ...props }) => {
  return (
    <S.Wrapper className={className} {...props}>
      <h1>Sidebar</h1>
    </S.Wrapper>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string
}

Sidebar.defaultProps = {
  className: 'sidebar'
}

export default Sidebar
