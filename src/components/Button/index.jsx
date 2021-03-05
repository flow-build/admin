import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({
  className,
  children,
  icon,
  size,
  fullWidth,
  variant,
  ...props
}) => {
  return (
    <S.Wrapper
      className={className}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      variant={variant}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  fullWidth: PropTypes.bool
}

Button.defaultProps = {
  className: 'button',
  icon: '',
  children: '',
  size: 'medium',
  variant: 'primary',
  fullWidth: false
}

export default Button
