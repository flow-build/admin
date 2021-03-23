import React from 'react'

import NavigationItem from 'components/Navigation/NavigationItem'
import SidebarData from 'components/Sidebar/SidebarData'
import PropTypes from 'prop-types'

import * as S from './styles'

const NavigationItems = ({ className, ...props }) => {
  let sidebarItem = SidebarData.find((item) => {
    return item.title === props.menuItem
  })

  // console.log('[NavigationItems] sidebarItem', sidebarItem)

  return (
    <S.Wrapper className={className} {...props}>
      <NavigationItem link={sidebarItem.path} title={sidebarItem.title} />
      {sidebarItem.subNav
        ? sidebarItem.subNav.map((subNavItem, index) => {
            return (
              <NavigationItem
                key={index}
                link={subNavItem.path}
                title={subNavItem.title}
              />
            )
          })
        : null}
    </S.Wrapper>
  )
}

NavigationItems.propTypes = {
  className: PropTypes.string,
  menuItem: PropTypes.string
}

NavigationItems.defaultProps = {
  className: 'navigationitems'
}

export default NavigationItems
