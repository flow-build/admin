import React from 'react';
import MdApps from 'react-ionicons/lib/MdApps';
import MdArrowRoundBack from 'react-ionicons/lib/MdArrowRoundBack';
import MdBuild from 'react-ionicons/lib/MdBuild';
import MdCheckmarkCircle from 'react-ionicons/lib/MdCheckmarkCircle';
import MdCloseCircle from 'react-ionicons/lib/MdCloseCircle';
import MdCrop from 'react-ionicons/lib/MdCrop';
import MdDesktop from 'react-ionicons/lib/MdDesktop';
import MdFiling from 'react-ionicons/lib/MdFiling';
import MdLock from 'react-ionicons/lib/MdLock';
import MdLogOut from 'react-ionicons/lib/MdLogOut';
import MdPerson from 'react-ionicons/lib/MdPerson';
import MdPlay from 'react-ionicons/lib/MdPlay';
import MdPodium from 'react-ionicons/lib/MdPodium';
import MdSearch from 'react-ionicons/lib/MdSearch';
import MdSettings from 'react-ionicons/lib/MdSettings';
import MdWarning from 'react-ionicons/lib/MdWarning';

const getSelectedIcon = (icon, onClick) => {
  const classNameIcon = 'icon';
  const icons = {
    Dashboard: <MdApps className={classNameIcon} />,
    Blueprint: <MdCrop className={classNameIcon} />,
    Workflow: <MdDesktop className={classNameIcon} />,
    Insights: <MdPodium className={classNameIcon} />,
    Toolbox: <MdBuild className={classNameIcon} />,
    Settings: <MdSettings className={classNameIcon} />,
    Back: <MdArrowRoundBack className={classNameIcon} onClick={onClick} />,
    Logout: <MdLogOut className="icon" />,
    LogoutHeader: <MdLogOut className="logout" onClick={onClick} />,
    User: <MdPerson className="input-icon" />,
    Password: <MdLock className="input-icon" />,
    Search: <MdSearch className="input-icon" />,
    Finalizado: <MdCheckmarkCircle className={`${classNameIcon}-done`} />,
    Andamento: <MdPlay className={`${classNameIcon}-play`} />,
    Atencao: <MdWarning className={`${classNameIcon}-warning`} />,
    Erro: <MdCloseCircle className={`${classNameIcon}-close`} />,
    Filing: <MdFiling className={classNameIcon} />,
  };
  return icons[icon];
};

export const convertIcon = (status) => {
  let statusName = '';
  switch (status) {
    case ('waiting'):
    case ('running'):
      statusName = 'Andamento';
      break;
    case ('error'):
    case ('interrupted'):
      statusName = 'Erro';
      break;
    case ('finished'):
      statusName = 'Finalizado';
      break;
    case ('aborted'):
    case ('unstarted'):
    case ('pending'):
      statusName = 'Atencao';
      break;
    default: statusName = '';
  }
  return statusName;
};

export default getSelectedIcon;
