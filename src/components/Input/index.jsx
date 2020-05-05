import React from 'react';
import MdLock from 'react-ionicons/lib/MdLock';
import MdPerson from 'react-ionicons/lib/MdPerson';

import PropTypes from 'prop-types';


const Input = ({
  placeholder, type, icon, setValue, value,
}) => {
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
      <input type={type} className={className} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} value={value} />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  icon: '',
};

export default Input;
