import React, { useState } from 'react'

import Header from 'components/Header'
import Main from 'components/Main'
import Sidebar from 'components/Sidebar'
import SidebarToggleMenu from 'components/Sidebar/SidebarToggle/SidebarToggleMenu'
import PropTypes from 'prop-types'

import * as S from './styles'

const Layout = ({ className, children, ...props }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [menuItemTitle, setMenuItemTitle] = useState('')

  const sidebarToggleClicked = (title) => {
    setShowSidebar(!showSidebar)
    setMenuItemTitle(title)
    // console.log('[Layout] title: ', title)
    // console.log('[Layout] menuItemTitle: ', menuItemTitle)
  }

  return (
    <>
      <Header />
      <S.Wrapper className={className} {...props}>
        <SidebarToggleMenu
          toggleClicked={(title) => sidebarToggleClicked(title)}
        />
        {showSidebar && <Sidebar menuTitle={menuItemTitle} />}
        <Main>{children}</Main>
      </S.Wrapper>
    </>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  className: 'layout'
}

export default Layout
