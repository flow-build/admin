import React from 'react';

import PropTypes from 'prop-types';

import ProcessItem from './ProcessItem';

const Process = ({
  listProcessItem,
}) => (
  <table className="table">
    <tr>
      <th>ID</th>
      <th>Data Criação</th>
      <th>Status</th>
      <th>Passo Atual</th>
      <th>Nó</th>
      <th>Phóximo Nó</th>
      <th>Ultima Atualização</th>
    </tr>
    {listProcessItem.map((processItem) => (
      <ProcessItem {...processItem} />
    ))}
  </table>
);

Process.propTypes = {
  listProcessItem: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string],
  )).isRequired,
};

export default Process;
