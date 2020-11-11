import React from 'react';

const CenterStorybook = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="center-storybook">
      {children}
    </div>
  );
};

export default CenterStorybook;
