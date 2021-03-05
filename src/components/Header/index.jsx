import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'components/Logo'
import PropTypes from 'prop-types'
import useAuth from 'utils/hooks/useAuth'

import * as S from './styles'

const Header = ({ className, ...props }) => {
  const { signed, user } = useAuth()
  return (
    <S.Wrapper className={className} {...props}>
      <S.LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </S.LogoWrapper>
      <S.ActionsWrapper>
        {signed ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/user">{user}</Link>
          </>
        ) : (
          <Link to="/signin">sign in</Link>
        )}
      </S.ActionsWrapper>
    </S.Wrapper>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

Header.defaultProps = {
  className: 'header'
}

export default Header
