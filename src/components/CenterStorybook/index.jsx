import React from 'react';

import PropTypes from 'prop-types';

const CenterStorybook = (props) => {
  const { children } = props;
  return (
    <div className="center-storybook">
      {children}
    </div>
  );
};

CenterStorybook.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CenterStorybook;
