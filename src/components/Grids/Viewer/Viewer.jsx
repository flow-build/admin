import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Viewer = ({ viewerContent }) => {
  if (!viewerContent) return null
  return (
    <S.Container>
      <pre>{viewerContent}</pre>
    </S.Container>
  )
}

Viewer.propTypes = {
  viewerContent: PropTypes.any
}

export default Viewer
