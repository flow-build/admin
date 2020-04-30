import React from 'react';

import PropTypes from 'prop-types';

import fdteLogo from '../../assets/img/logo-fdte.png';


const Logo = (props) => {
  const { styleName } = props;
  const { heightImg } = props;
  return (
    <div className={styleName} style={{ height: heightImg }}>
      <img src={fdteLogo} alt="FDTE" />
    </div>
  );
};

Logo.propTypes = {
  styleName: PropTypes.string.isRequired,
  heightImg: PropTypes.string,
};

Logo.defaultProps = {
  heightImg: '3rem',
};

export default Logo;
