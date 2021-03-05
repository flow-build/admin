import React from 'react'

import Header from 'components/Header'
import Main from 'components/Main'
import Sidebar from 'components/Sidebar'
import PropTypes from 'prop-types'

import * as S from './styles'

const Layout = ({ className, children, ...props }) => {
  return (
    <>
      <Header />
      <S.Wrapper className={className} {...props}>
        <Sidebar />
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
