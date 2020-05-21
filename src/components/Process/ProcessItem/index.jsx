/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import PropTypes from 'prop-types';

import iconUtil, { convertIcon } from '../../../utils/iconUtil';
import Input from '../../Input';


const ProcessItem = ({
  id, createdAt, status, stepNumber, nodeId, nextNodeId, lastUpdated, processCheck, radioAction,
}) => {
  const history = useHistory();
  const statusName = convertIcon(status);
  const redirectProcess = () => {
    history.push('/app/process/');
  };
  let lastUpdatedFormatted = differenceInDays(new Date(lastUpdated), new Date(createdAt));
  switch (lastUpdatedFormatted) {
    case (0):
      if (differenceInHours(new Date(lastUpdated), new Date(createdAt)) !== 0) {
        lastUpdatedFormatted = `Há ${differenceInHours(new Date(lastUpdated), new Date(createdAt))} hora(s) atrás`;
      } else {
        lastUpdatedFormatted = `Há ${differenceInMinutes(new Date(lastUpdated), new Date(createdAt))} minuto(s) atrás`;
      }
      break;
    case (1):
      lastUpdatedFormatted = `Há ${lastUpdatedFormatted} dia atrás`;
      break;
    default: lastUpdatedFormatted = `Há ${lastUpdatedFormatted} dias atrás`;
  }
  return (
    <tr>
      {processCheck && (
        <td>
          <Input elementType="radio" onChange={radioAction} />
        </td>
      )}
      <td className="id-link" onClick={redirectProcess}>{id}</td>
      <td>{createdAt}</td>
      <td>
        <div className="align-status">
          {statusName} {iconUtil(statusName)}
        </div>
      </td>
      <td>{stepNumber}</td>
      <td>{nodeId}</td>
      <td>{nextNodeId}</td>
      <td>{lastUpdatedFormatted}</td>
    </tr>
  );
};

ProcessItem.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
  nodeId: PropTypes.string.isRequired,
  nextNodeId: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  processCheck: PropTypes.bool,
  radioAction: PropTypes.func,
};

ProcessItem.defaultProps = {
  processCheck: false,
  radioAction: null,
};

export default ProcessItem;
