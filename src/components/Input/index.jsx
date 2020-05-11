import React from 'react';

import PropTypes from 'prop-types';

import iconUtil from '../../utils/iconUtil';


const Input = ({
  placeholder, type, icon, onChange, value, elementType, options,
}) => {
  let className = 'input-content';
  let inputElement = null;
  if (icon) className = `${className} input-content-icon`;
  switch (elementType) {
    case ('input'):
      inputElement = <input type={type} className={className} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={value} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={className} onChange={(e) => onChange(e.target.value)} value={value} />;
      break;
    case ('select'):
      inputElement = (
        <select className={className} onChange={(e) => onChange(e.target.value)} value={value}>
          {options.map((id) => (
            <option value={id} key={id}>
              {id}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input type={type} className={className} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={value} />;
  }
  return (
    <div className="input-container">
      {iconUtil(icon)}
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  elementType: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string],
  )).isRequired,
};

Input.defaultProps = {
  icon: '',
  placeholder: '',
};

export default Input;
