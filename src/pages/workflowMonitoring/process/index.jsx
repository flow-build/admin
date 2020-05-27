/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '../../../components/Button';
import JsonReader from '../../../components/JsonReader';
import ModalState from '../../../components/Modal/ModalState';
import Process from '../../../components/Process';
import SpinnerLoader from '../../../components/SpinnerLoader';

const ProcessPage = () => {
  const processesSelector = useSelector((state) => state.processes.processes);
  const loading = useSelector((state) => state.generic.loading);
  const totalProcess = useSelector((state) => state.processes.length);
  const nodeIds = ['1', '2', '3', '4', '5'];
  const [show, setShow] = useState(false);
  const [processObject, setProcessObject] = useState({
    stepNumber: 0,
    createdAt: '',
    status: '',
    bag: {},
    result: {},
  });
  const createProcess = () => {
    setShow(true);
  };
  const editProcess = () => {
    setShow(true);
  };
  const abortProcess = () => {
    alert('abortProcess');
  };
  const readProcess = (processItem) => {
    setProcessObject({
      stepNumber: processItem.stepNumber,
      createdAt: processItem.createdAt,
      status: processItem.status,
      bag: processItem.bag,
      result: processItem.result,
    });
  };
  return (
    <div className="process-page-loading">
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <ModalState nodeIds={nodeIds} show={show} setShow={setShow}>
          <div className="process-page-container">
            <div className="process-page-actions">
              <Button title="Criar novo processo a partir de " onClick={createProcess} />
              <Button title="Editar estado do processo" onClick={editProcess} />
              <Button title="Abortar processo" onClick={abortProcess} color="red" />
            </div>
            <div className="process-page-content">
              <div className="processes-table">
                <Process listProcessItem={processesSelector} total={totalProcess} processAction={(processitem) => readProcess(processitem)} processCheck />
              </div>
              <div className="process-page-json">
                <JsonReader processObject={processObject} />
              </div>
            </div>
          </div>
        </ModalState>
      )};
    </div>
  );
};

export default ProcessPage;
