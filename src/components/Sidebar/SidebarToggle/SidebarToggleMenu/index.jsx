import React from 'react'
// import * as FaIcons from 'react-icons/fa'
// import * as FiIcons from 'react-icons/fi'

import SidebarData from 'components/Sidebar/SidebarData'
import SidebarToggle from 'components/Sidebar/SidebarToggle'
import PropTypes from 'prop-types'

import * as S from './styles'

const SidebarToggleMenu = ({ className, ...props }) => {
  return (
    <S.Wrapper className={className} {...props}>
      {SidebarData.map((item, index) => {
        return (
          <SidebarToggle
            key={index}
            title={item.title}
            icon={item.icon}
            onClick={() => props.toggleClicked(item.title)}
          />
        )
      })}
    </S.Wrapper>
  )
}

SidebarToggleMenu.propTypes = {
  className: PropTypes.string,
  toggleClicked: PropTypes.func
}

SidebarToggleMenu.defaultProps = {
  className: 'sidebartogglemenu'
}

export default SidebarToggleMenu
