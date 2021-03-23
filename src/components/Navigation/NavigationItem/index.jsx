import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import * as S from './styles'

const NavigationItem = ({ className, ...props }) => {
  return (
    <S.Wrapper className={className} {...props}>
      <Link to={props.link}>{props.title}</Link>
    </S.Wrapper>
  )
}

NavigationItem.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string
}

NavigationItem.defaultProps = {
  className: 'navigationitem'
}

export default NavigationItem
