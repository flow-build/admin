import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  differenceInDays, differenceInHours, differenceInMinutes, format,
} from 'date-fns';
import PropTypes from 'prop-types';

import iconUtil, { convertIcon } from '../../../utils/iconUtil';

const ProcessItem = ({
  id, createdAt, status, stepNumber, nodeId, nextNodeId, lastUpdated, processCheck, action, workflowId,
}) => {
  const history = useHistory();
  const statusName = convertIcon(status);
  const formatedDate = format(new Date(createdAt), 'dd/MM/yyyy HH:mm:ss');
  const redirectProcess = () => {
    history.push(`/app/process/${workflowId}/${id}`);
  };
  let lastUpdatedFormatted = differenceInDays(new Date(), new Date(lastUpdated));
  switch (lastUpdatedFormatted) {
    case (0):
      if (differenceInHours(new Date(), new Date(lastUpdated)) !== 0) {
        lastUpdatedFormatted = `Há ${differenceInHours(new Date(), new Date(lastUpdated))} hora(s) atrás`;
      } else {
        lastUpdatedFormatted = `Há ${differenceInMinutes(new Date(), new Date(lastUpdated))} minuto(s) atrás`;
      }
      break;
    case (1):
      lastUpdatedFormatted = `Há ${lastUpdatedFormatted} dia atrás`;
      break;
    default: lastUpdatedFormatted = `Há ${lastUpdatedFormatted} dias atrás`;
  }
  return (
    <tr className="table-row" onClick={!processCheck ? redirectProcess : action}>
      <td className="id-link">{id}</td>
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
  nextNodeId: PropTypes.string,
  lastUpdated: PropTypes.string,
  processCheck: PropTypes.bool,
  action: PropTypes.func,
  workflowId: PropTypes.string,
};

ProcessItem.defaultProps = {
  processCheck: false,
  action: null,
  lastUpdated: '',
  workflowId: '',
  nextNodeId: '',
};

export default ProcessItem;
