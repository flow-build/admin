/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/Button';
import DateRange from '../../../components/DateRange';
import Process from '../../../components/Process';
import SpinnerLoader from '../../../components/SpinnerLoader';
import { getProcesses } from '../../../redux/middleware/processes';

const ProcessesPage = ({
  match,
}) => {
  const dispatch = useDispatch();
  const paramWorkflowId = match.params.workflowId;
  const processesSelector = useSelector((state) => state.processes.processes);
  const initialDateArray = [new Date('3/12/2020'), new Date('7/27/2020')];
  const [updatedDateArray, setUpdatedDateArray] = useState([]);
  const loading = useSelector((state) => state.generic.loading);
  const totalProcess = useSelector((state) => state.processes.length);
  useEffect(() => {
    dispatch(getProcesses(paramWorkflowId));
  }, [dispatch]);
  return (
    <div className="processes-container">
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <>
          <div className="processes-filter">
            <DateRange initialDateArray={initialDateArray} setUpdatedDateArray={setUpdatedDateArray} updatedDateArray={updatedDateArray} />
            <Button title="atualizar" onClick={() => dispatch(getProcesses(paramWorkflowId))} />
          </div>
          <div className="processes-table">
            <p className="processes-page-title">Processos</p>
            <Process listProcessItem={processesSelector} total={totalProcess} workflowId={match.params.workflowId} workflowName={match.params.workflowName} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProcessesPage;
