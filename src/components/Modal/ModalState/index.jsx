/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../Button';
import Input from '../../Input';
import * as actions from '../../../redux/actions';

import Modal from '..';

const createProcess = () => {
  console.log('clicked');
};
const editProcess = () => {
  console.log('clicked');
};
const setState = () => {
  console.log('clicked');
};

const ModalState = ({
  children, show, setShow, processObject, workflowIdParam, buttonCheckAction,
}) => {
  const dispatch = useDispatch();
  const nodeIds = useSelector((state) => state.states.stateNodes);
  const [workflowId, setWorkflowId] = useState('');
  const [processId, setProcessId] = useState('');
  const [nodeId, setNodeId] = useState('');
  const [bag, setBag] = useState({});
  const [result, setResult] = useState({});
  useEffect(() => {
    dispatch(actions.getBlueprintWorkflowStart(workflowIdParam));
    setWorkflowId(workflowIdParam);
    setProcessId(processObject.id);
    setNodeId(processObject.nodeId);
    setBag(processObject.bag);
    setResult(processObject.result);
  }, [processObject]);
  return (
    <Modal title="Cadastro State" type="register" show={show} setShow={setShow} childrenModal={children}>
      {show ? (
        <>
          <div className="modal-state">
            <form>
              <label>
                ID Worflow:
                <Input elementType="input" type="text" placeholder="ID Workflow" value={workflowId} onChange={setWorkflowId} />
              </label>
              <label>
                ID Processo:
                <Input elementType="input" type="text" placeholder="ID Processo" value={processId} onChange={setProcessId} />
              </label>
              <label>
                ID Nó:
                <Input elementType="select" options={nodeIds} placeholder="ID Nó" value={nodeId} onChange={setNodeId} />
              </label>
              <label>
                Bag:
                <div className="json-reader-content" style={{ marginTop: '.5rem' }}>
                  <ReactJson src={bag} displayDataTypes={false} onAdd={(add) => {}} onEdit={(edit) => {}} onDelete={(del) => {}} />
                </div>
              </label>
              <label>
                Result:
                <div className="json-reader-content" style={{ marginTop: '.5rem' }}>
                  <ReactJson src={result} displayDataTypes={false} onAdd={(add) => {}} onEdit={(edit) => {}} onDelete={(del) => {}} />
                </div>
              </label>
              <div className="modal-state-button">
                <Button title={buttonCheckAction === 'edit' ? 'Editar Processo' : 'Criar Novo Processo'} onClick={buttonCheckAction === 'edit' ? createProcess : editProcess} />
                <Button title="Set State" onClick={setState} />
              </div>
            </form>
          </div>
        </>
      ) : children}
    </Modal>
  );
};

export default ModalState;
