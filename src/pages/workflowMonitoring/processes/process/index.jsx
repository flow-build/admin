/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../../../components/Button';
import JsonReader from '../../../../components/JsonReader';
import ModalState from '../../../../components/Modal/ModalState';
import Process from '../../../../components/Process';
import SpinnerLoader from '../../../../components/SpinnerLoader';
import * as actions from '../../../../redux/actions';
import iconUtil from '../../../../utils/iconUtil';

const ProcessPage = ({
  match,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const statesSelector = useSelector((state) => state.states.states);
  const loading = useSelector((state) => state.generic.loading);
  const totalProcess = useSelector((state) => state.states.length);
  const nodeIds = ['1', '2', '3', '4', '5'];
  const [show, setShow] = useState(false);
  const [processObject, setProcessObject] = useState({
    stepNumber: 0,
    createdAt: '',
    status: '',
    bag: {},
    result: {},
  });
  useEffect(() => {
    dispatch(actions.getStatesStart(match.params.processId));
  }, [dispatch]);
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
    <div style={{ width: '100%' }}>
      {loading ? (
        <div className="process-page-loading">
          <SpinnerLoader fontSize="1" />
        </div>
      ) : (
        <ModalState nodeIds={nodeIds} show={show} setShow={setShow}>
          <div className="process-page-container">
            <div className="process-page-actions">
              {iconUtil('Back', history.goBack)}
              <Button title="Criar novo processo a partir de " onClick={createProcess} />
              <Button title="Editar estado do processo" onClick={editProcess} />
              <Button title="Abortar processo" onClick={abortProcess} color="red" />
            </div>
            <div className="process-page-content">
              <div className="processes-table">
                <Process
                  listProcessItem={statesSelector}
                  total={totalProcess}
                  processAction={(processitem) => readProcess(processitem)}
                  processCheck
                />
              </div>
              <div className="process-page-json">
                <JsonReader processObject={processObject} />
              </div>
            </div>
          </div>
        </ModalState>
      )}
    </div>
  );
};


export default ProcessPage;
