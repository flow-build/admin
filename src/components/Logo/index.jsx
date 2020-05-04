import React from 'react';

import PropTypes from 'prop-types';

import fdteLogo from '../../assets/img/logo-fdte.png';


const Logo = ({
  heightLogo, className,
}) => (
  <div className={`logo ${className}`} style={{ height: heightLogo }}>
    <img src={fdteLogo} alt="FDTE" />
  </div>
);

Logo.propTypes = {
  heightLogo: PropTypes.string,
  className: PropTypes.string,
};

Logo.defaultProps = {
  heightLogo: '3rem',
  className: '',
};

export default Logo;
