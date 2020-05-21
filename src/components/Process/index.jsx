import React from 'react';

import PropTypes from 'prop-types';

import ProcessItem from './ProcessItem';

const Process = ({
  listProcessItem, processCheck, processAction,
}) => (
  <table className="table">
    <thead>
      <tr>
        {processCheck && <th>#</th>}
        <th>ID</th>
        <th>Data Criação</th>
        <th>Status</th>
        <th>Passo Atual</th>
        <th>Nó</th>
        <th>Próximo Nó</th>
        <th>Última Atualização</th>
      </tr>
    </thead>
    <tbody>
      {listProcessItem.map((processItem) => (
        <ProcessItem key={processItem.id} {...processItem} processCheck={processCheck} radioAction={() => processAction(processItem)} />
      ))}
    </tbody>
  </table>
);

Process.propTypes = {
  listProcessItem: PropTypes.arrayOf(PropTypes.shape(
    [PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string],
  )).isRequired,
  processCheck: PropTypes.bool,
  processAction: PropTypes.func,
};

Process.defaultProps = {
  processCheck: false,
  processAction: null,
};

export default Process;
