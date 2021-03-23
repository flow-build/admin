import React from 'react'
import { IconContext } from 'react-icons/lib'

import PropTypes from 'prop-types'

import * as S from './styles'

const SidebarToggle = ({ className, ...props }) => {
  return (
    <S.Wrapper className={className} {...props}>
      <S.NavIcon>
        <IconContext.Provider value={{ color: '#fff' }}>
          {props.icon}
        </IconContext.Provider>
      </S.NavIcon>
    </S.Wrapper>
  )
}

SidebarToggle.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any
}

SidebarToggle.defaultProps = {
  className: 'sidebartoggle'
}

export default SidebarToggle
