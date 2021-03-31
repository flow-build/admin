import React from 'react'

import PropTypes from 'prop-types'
import * as UTIL from 'utils'

import * as S from './styles'

const Content = ({ content, currentCell }) => {
  const contentStyle = {
    whiteSpace: `${UTIL.isString(currentCell) ? 'pre-line' : ''}`,
  }

  return (
    <S.Container>
      <S.Pre>
        <S.Text
          style={contentStyle}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </S.Pre>
    </S.Container>
  )
}

Content.propTypes = {
  content: PropTypes.any,
  currentCell: PropTypes.any,
}

export default Content
