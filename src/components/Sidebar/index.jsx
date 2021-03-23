import React from 'react'

import PropTypes from 'prop-types'

import NavigationItems from '../Navigation/NavigationItem/NavigationItems'
import * as S from './styles'

const Sidebar = ({ className, ...props }) => {
  // console.log('[Sidebar] menuTitle: ', props.menuTitle)
  return (
    <S.Wrapper className={className} {...props}>
      <h1>Sidebar</h1>
      <NavigationItems menuItem={props.menuTitle} />
    </S.Wrapper>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  menuTitle: PropTypes.string
}

Sidebar.defaultProps = {
  className: 'sidebar'
}

export default Sidebar
