import React from 'react';
import MdLock from 'react-ionicons/lib/MdLock';
import MdPerson from 'react-ionicons/lib/MdPerson';

import PropTypes from 'prop-types';


const Input = (props) => {
  const { placeholder } = props;
  const { styleName } = props;
  const { type } = props;
  const { icon } = props;
  let ionIcon = null;
  if (icon) {
    if (icon === 'user') {
      ionIcon = <MdPerson className="input-icon" />;
    } else if (icon === 'password') {
      ionIcon = <MdLock className="input-icon" />;
    }
  }
  return (
    <div className="input-div">
      {ionIcon}
      <input type={type} className={styleName} placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Input.defaultProps = {
  icon: '',
};

export default Input;
