import React from 'react';
import MdLock from 'react-ionicons/lib/MdLock';
import MdPerson from 'react-ionicons/lib/MdPerson';

import PropTypes from 'prop-types';


const Input = ({ placeholder, type, icon }) => {
  const classNameIcon = 'input-icon';
  let ionIcon = null;
  let className = 'input-content';
  if (icon) {
    className = `${className} input-content-icon`;
    if (icon === 'user') {
      ionIcon = <MdPerson className={classNameIcon} />;
    } else if (icon === 'password') {
      ionIcon = <MdLock className={classNameIcon} />;
    }
  }
  return (
    <div className="input-container">
      {ionIcon}
      <input type={type} className={className} placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Input.defaultProps = {
  icon: '',
};

export default Input;
