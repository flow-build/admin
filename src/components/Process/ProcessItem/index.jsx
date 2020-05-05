import React from 'react';

import PropTypes from 'prop-types';

import IconUtil from '../../../utils/iconUtil';


const ProcessItem = ({
  id, date, status, step, node, next, lastUpdate,
}) => (
  <tr>
    <td className="id-link">{id}</td>
    <td>{date}</td>
    <td>
      <div className="align-status">
        {status} {IconUtil(status)}
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
