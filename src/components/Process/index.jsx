/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Pagination from './Pagination';
import ProcessItem from './ProcessItem';

const Process = ({
  listProcessItem, processCheck, processAction, total, workflowId, workflowName,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(processCheck ? 12 : 10);
  const indexOfLast = currentPage * resultsPerPage;
  const indexOfFirst = indexOfLast - resultsPerPage;
  const orderedProcessItem = [].concat(listProcessItem).sort((processOne, processTwo) => {
    if (processOne.lastUpdated) {
      if (processOne.lastUpdated < processTwo.lastUpdated) {
        return 1;
      }
    } else if (processOne.createdAt < processTwo.createdAt) {
      return 1;
    }
    return -1;
  });
  const currentProcess = orderedProcessItem.slice(indexOfFirst, indexOfLast);
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
          {currentProcess.sort((firstProcess, secondProcess) => firstProcess.lastUpdated - secondProcess.lastUpdated).map((processItem) => (
            <ProcessItem
              key={processItem.id}
              {...processItem}
              processCheck={processCheck}
              action={() => processAction(processItem)}
              workflowId={workflowId}
              workflowName={workflowName}
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
  workflowName: PropTypes.string,
};

Process.defaultProps = {
  processCheck: false,
  processAction: null,
  workflowId: '',
  workflowName: '',
};

export default Process;
