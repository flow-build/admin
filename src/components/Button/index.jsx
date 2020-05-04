import React from 'react';

import PropTypes from 'prop-types';

const Button = ({
  className, title, color, disabled, onClick,
}) => (

  <button className={`btn btn--${color} ${disabled && 'btn--disabled'} ${className}`} onClick={onClick}>{title}</button>

);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: '',
  disabled: false,
  className: '',
};

export default Button;
