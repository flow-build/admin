import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Pagination from './Pagination';
import ProcessItem from './ProcessItem';

const Process = ({
  listProcessItem, processCheck, processAction, total, workflowId,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(processCheck ? 12 : 10);
  const indexOfLast = currentPage * resultsPerPage;
  const indexOfFirst = indexOfLast - resultsPerPage;
  const currentProcess = listProcessItem.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data Criação</th>
            <th>Status</th>
            <th>Passo Atual</th>
            <th>Nó</th>
            <th>Próximo Nó</th>
            {!processCheck && <th>Última Atualização</th>}
          </tr>
        </thead>
        <tbody>
          {currentProcess.map((processItem) => (
            <ProcessItem
              key={processItem.id}
              {...processItem}
              processCheck={processCheck}
              action={() => processAction(processItem)}
              workflowId={workflowId}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        resultsPerPage={resultsPerPage}
        totalResults={total}
        paginate={paginate}
      />
    </>
  );
};

Process.propTypes = {
  listProcessItem: PropTypes.arrayOf(PropTypes.shape(
    [PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string, PropTypes.string],
  )).isRequired,
  processCheck: PropTypes.bool,
  processAction: PropTypes.func,
  total: PropTypes.number.isRequired,
  workflowId: PropTypes.string,
};

Process.defaultProps = {
  processCheck: false,
  processAction: null,
  workflowId: '',
};

export default Process;
