import React from 'react';
import MdLock from 'react-ionicons/lib/MdLock';
import MdPerson from 'react-ionicons/lib/MdPerson';

import PropTypes from 'prop-types';


let className = 'input-content';

export const getSelectedIcon = (icon) => {
  const classNameIcon = 'input-icon';
  if (icon) className = `${className} input-content-icon`;
  const icons = {
    user: <MdPerson className={classNameIcon} />,
    password: <MdLock className={classNameIcon} />,
  };
  return icons[icon];
};

const Input = ({
  placeholder, type, icon, onChange, value,
}) => (
  <div className="input-container">
    {getSelectedIcon(icon)}
    <input type={type} className={className} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={value} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  icon: '',
};

export default Input;
