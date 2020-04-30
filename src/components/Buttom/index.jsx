import React from 'react';

import PropTypes from 'prop-types';

const Button = (props) => {
  const { children } = props;
  const { styleName } = props;
  return (
    <a className={styleName} href="/">{children}</a>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
};

export default Button;
