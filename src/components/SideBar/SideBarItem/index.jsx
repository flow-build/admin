import React from 'react';
import MdApps from 'react-ionicons/lib/MdApps';
import MdBuild from 'react-ionicons/lib/MdBuild';
import MdCrop from 'react-ionicons/lib/MdCrop';
import MdDesktop from 'react-ionicons/lib/MdDesktop';
import MdPodium from 'react-ionicons/lib/MdPodium';
import MdSettings from 'react-ionicons/lib/MdSettings';

import PropTypes from 'prop-types';


export const getSelectedIcon = (icon) => {
  const classNameIcon = 'icon';
  const icons = {
    Dashboard: <MdApps className={classNameIcon} />,
    Blueprint: <MdCrop className={classNameIcon} />,
    Workflow: <MdDesktop className={classNameIcon} />,
    Insights: <MdPodium className={classNameIcon} />,
    Toolbox: <MdBuild className={classNameIcon} />,
    Settings: <MdSettings className={classNameIcon} />,
  };
  return icons[icon];
};

const SideBarItem = ({
  icon, name,
}) => (
  <div className="sidebar-item">
    <div>
      {getSelectedIcon(icon)}
      <p>{name}</p>
    </div>
  </div>
);

SideBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SideBarItem;
