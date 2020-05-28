/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  differenceInDays, differenceInHours, differenceInMinutes, format,
} from 'date-fns';
import PropTypes from 'prop-types';

import iconUtil, { convertIcon } from '../../../utils/iconUtil';
import Input from '../../Input';


const ProcessItem = ({
  id, createdAt, status, stepNumber, nodeId, nextNodeId, lastUpdated, processCheck, action,
}) => {
  const history = useHistory();
  const statusName = convertIcon(status);
  const [checked, setChecked] = useState(false);
  const formatedDate = format(new Date(createdAt), 'dd/MM/yyyy HH:mm:ss');
  const redirectProcess = () => {
    history.push(`/app/process/${id}`);
  };
  const selectRow = () => {
    setChecked(!checked);
    action();
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
    <tr className="table-row" onClick={selectRow}>
      {processCheck && (
        <td>
          <Input elementType="radio" onChange={selectRow} checked={checked} />
        </td>
      )}
      <td className="id-link" onClick={redirectProcess}>{id}</td>
      <td>{formatedDate}</td>
      <td>
        <div className="align-status">
          {iconUtil(statusName)} {status}
        </div>
      </td>
      <td>{stepNumber}</td>
      <td>{nodeId}</td>
      <td>{nextNodeId}</td>
      {!processCheck && (
        <td>{lastUpdatedFormatted}</td>
      )}
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
  lastUpdated: PropTypes.string,
  processCheck: PropTypes.bool,
  action: PropTypes.func,
};

ProcessItem.defaultProps = {
  processCheck: false,
  action: null,
  lastUpdated: '',
};

export default ProcessItem;
