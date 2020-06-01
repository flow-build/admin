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
  const [buttonCheckAction, setButtonCheckAction] = useState('');
  const statesSelector = useSelector((state) => state.states.states);
  const loading = useSelector((state) => state.generic.loading);
  const totalProcess = useSelector((state) => state.states.length);
  const [show, setShow] = useState(false);
  const [processObject, setProcessObject] = useState({
    id: '',
    stepNumber: 0,
    createdAt: '',
    status: '',
    nodeId: '',
    bag: {},
    result: {},
  });
  useEffect(() => {
    dispatch(actions.getStatesStart(match.params.processId));
  }, [dispatch]);
  const changeProcess = (action) => {
    if (!processObject.status) {
      alert('Por favor selecione um processo');
      return;
    }
    setButtonCheckAction(action);
    setShow(true);
  };
  const abortProcess = () => {
    if (!match.params.processId) {
      alert('Selecione um processo por favor');
      return;
    }
    dispatch(actions.abortProcessStart(match.params.processId));
    history.goBack();
    alert('Processo excluído com sucesso!');
  };
  const readProcess = (processItem) => {
    setProcessObject({
      id: processItem.id,
      nodeId: processItem.nodeId,
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
        <ModalState
          show={show}
          setShow={setShow}
          processObject={processObject}
          workflowIdParam={match.params.workflowId}
          workflowNameParam={match.params.workflowName}
          buttonCheckAction={buttonCheckAction}
        >
          <div className="process-page-container">
            <div className="process-page-actions">
              {iconUtil('Back', history.goBack)}
              <Button title="Criar novo processo a partir de " onClick={() => changeProcess('create')} />
              <Button title="Editar estado do processo" onClick={() => changeProcess('edit')} />
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
