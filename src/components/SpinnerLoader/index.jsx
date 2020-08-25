import React from 'react';

import PropTypes from 'prop-types';

const Spinner = ({
  fontSize,
}) => (
  <div className="loader" style={{ fontSize: `${fontSize}rem` }}>Loading...</div>
);

Spinner.propTypes = {
  fontSize: PropTypes.string.isRequired,
};

export default Spinner;
