import React from 'react';

import PropTypes from 'prop-types';

import iconUtil from '../../utils/iconUtil';


const Input = ({
  placeholder, type, icon, onChange, value,
}) => {
  let className = 'input-content';
  if (icon) className = `${className} input-content-icon`;
  return (
    <div className="input-container">
      {iconUtil(icon)}
      <input type={type} className={className} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={value} />
    </div>
  );
};

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
