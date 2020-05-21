import React from 'react';

import PropTypes from 'prop-types';

import iconUtil from '../../utils/iconUtil';


const Input = ({
  placeholder, type, icon, onChange, value, elementType, options, error, onFocus,
}) => {
  let className = 'input-content';
  let inputElement = null;
  if (icon) className = `${className} input-content-icon`;
  if (error) className = `${className} error`;
  switch (elementType) {
    case ('input'):
      inputElement = <input type={type} className={className} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={value} onFocus={onFocus} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={className} onChange={(e) => onChange(e.target.value)} value={value} onFocus={onFocus} />;
      break;
    case ('radio'):
      inputElement = <input type={elementType} onChange={onChange} name="radioButton" />;
      break;
    case ('select'):
      inputElement = (
        <select className={className} onChange={(e) => onChange(e.target.value)} value={value}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input type={type} className={className} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={value} onFocus={onFocus} />;
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
  type: PropTypes.string,
  elementType: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.bool,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  icon: '',
  placeholder: '',
  error: false,
  onFocus: null,
  options: [],
  type: '',
  value: '',
};

export default Input;
