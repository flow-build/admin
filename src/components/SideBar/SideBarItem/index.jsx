import React from 'react';
import MdApps from 'react-ionicons/lib/MdApps';
import MdBuild from 'react-ionicons/lib/MdBuild';
import MdCrop from 'react-ionicons/lib/MdCrop';
import MdDesktop from 'react-ionicons/lib/MdDesktop';
import MdPodium from 'react-ionicons/lib/MdPodium';
import MdSettings from 'react-ionicons/lib/MdSettings';

import PropTypes from 'prop-types';


const SideBarItem = (props) => {
  const { icon } = props;
  const { name } = props;
  let ionIcon = null;
  const colorAndFontIcon = {
    color: '#34495e',
    fontSize: '2.3rem',
  };
  if (icon) {
    switch (icon) {
      case 'Dashboard':
        ionIcon = <MdApps {...colorAndFontIcon} />;
        break;
      case 'Blueprint':
        ionIcon = <MdCrop {...colorAndFontIcon} />;
        break;
      case 'Workflow':
        ionIcon = <MdDesktop {...colorAndFontIcon} />;
        break;
      case 'Insights':
        ionIcon = <MdPodium {...colorAndFontIcon} />;
        break;
      case 'Toolbox':
        ionIcon = <MdBuild {...colorAndFontIcon} />;
        break;
      case 'Settings':
        ionIcon = <MdSettings {...colorAndFontIcon} />;
        break;
      default:
        ionIcon = null;
        break;
    }
  }
  return (
    <div className="sideBarItem">
      <div>
        {ionIcon}
        <p>{name}</p>
      </div>
    </div>
  );
};

SideBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SideBarItem;
