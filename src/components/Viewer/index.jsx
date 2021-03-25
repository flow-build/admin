import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Viewer = ({ className, ...props }) => {
  return props.viewerContent ? (
    <S.Wrapper className={className} {...props}>
      <S.Line>{props.viewerContent}</S.Line>
    </S.Wrapper>
  ) : null
}

Viewer.propTypes = {
  className: PropTypes.string,
  viewerContent: PropTypes.any
}

Viewer.defaultProps = {
  className: 'viewer'
}

export default Viewer
