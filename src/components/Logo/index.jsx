import React from 'react';

import PropTypes from 'prop-types';

import fdteLogo from '../../assets/img/logo-fdte.png';

const Logo = ({
  height, className,
}) => (
  <div className={`logo ${className}`} style={{ height: `${height}rem` }}>
    <img src={fdteLogo} alt="FDTE" />
  </div>
);

Logo.propTypes = {
  height: PropTypes.string,
  className: PropTypes.string,
};

Logo.defaultProps = {
  height: '3',
  className: '',
};

export default Logo;
