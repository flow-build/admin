import React from 'react';
import MdCheckmarkCircle from 'react-ionicons/lib/MdCheckmarkCircle';
import MdCloseCircle from 'react-ionicons/lib/MdCloseCircle';
import MdPlay from 'react-ionicons/lib/MdPlay';
import MdWarning from 'react-ionicons/lib/MdWarning';


import PropTypes from 'prop-types';

export const getSelectedIcon = (status) => {
  const icons = {
    Finalizado: <MdCheckmarkCircle className="icon-done" />,
    Andamento: <MdPlay className="icon-play" />,
    Atencao: <MdWarning className="icon-warning" />,
    Erro: <MdCloseCircle className="icon-close" />,
  };
  return icons[status];
};

const ProcessItem = ({
  id, date, status, step, node, next, lastUpdate,
}) => (
  <tr>
    <td className="id-link">{id}</td>
    <td>{date}</td>
    <td>
      <div className="align-status">
        {status} {getSelectedIcon(status)}
      </div>
    </td>
    <td>{step}</td>
    <td>{node}</td>
    <td>{next}</td>
    <td>{lastUpdate}</td>
  </tr>
);

ProcessItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  node: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
};

export default ProcessItem;
