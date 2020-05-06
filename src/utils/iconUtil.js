import React from 'react';
import MdApps from 'react-ionicons/lib/MdApps';
import MdBuild from 'react-ionicons/lib/MdBuild';
import MdCheckmarkCircle from 'react-ionicons/lib/MdCheckmarkCircle';
import MdCloseCircle from 'react-ionicons/lib/MdCloseCircle';
import MdCrop from 'react-ionicons/lib/MdCrop';
import MdDesktop from 'react-ionicons/lib/MdDesktop';
import MdLock from 'react-ionicons/lib/MdLock';
import MdPerson from 'react-ionicons/lib/MdPerson';
import MdPlay from 'react-ionicons/lib/MdPlay';
import MdPodium from 'react-ionicons/lib/MdPodium';
import MdSettings from 'react-ionicons/lib/MdSettings';
import MdWarning from 'react-ionicons/lib/MdWarning';

const getSelectedIcon = (icon) => {
  const classNameIcon = 'icon';
  const icons = {
    Dashboard: <MdApps className={classNameIcon} />,
    Blueprint: <MdCrop className={classNameIcon} />,
    Workflow: <MdDesktop className={classNameIcon} />,
    Insights: <MdPodium className={classNameIcon} />,
    Toolbox: <MdBuild className={classNameIcon} />,
    Settings: <MdSettings className={classNameIcon} />,
    User: <MdPerson className="input-icon" />,
    Password: <MdLock className="input-icon" />,
    Finalizado: <MdCheckmarkCircle className={`${classNameIcon}-done`} />,
    Andamento: <MdPlay className={`${classNameIcon}-play`} />,
    Atencao: <MdWarning className={`${classNameIcon}-warning`} />,
    Erro: <MdCloseCircle className={`${classNameIcon}-close`} />,

  };
  return icons[icon];
};

export default getSelectedIcon;
