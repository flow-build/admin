/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../Button';
import Input from '../../Input';
import * as actions from '../../../redux/actions';

import Modal from '..';


const ModalState = ({
  children, show, setShow, processObject, workflowIdParam, buttonCheckAction, workflowNameParam,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const nodeIds = useSelector((state) => state.states.stateNodes);
  const [workflowId, setWorkflowId] = useState('');
  const [processId, setProcessId] = useState('');
  const [nodeId, setNodeId] = useState('');
  const [bag, setBag] = useState({});
  const [result, setResult] = useState({});
  useEffect(() => {
    dispatch(actions.getBlueprintWorkflowStart(workflowIdParam));
    setWorkflowId(workflowIdParam);
    setProcessId(buttonCheckAction === 'edit' ? processObject.id : '');
    setNodeId(processObject.nodeId);
    setBag(processObject.bag);
    setResult(processObject.result);
  }, [processObject, buttonCheckAction]);
  const createProcess = (event) => {
    event.preventDefault();
    const process = {
      next_node_id: nodeId,
      bag: bag ? bag : {},
      result: result ? result : {},
    };
    dispatch(actions.createNewProcessStart(workflowNameParam, process));
    history.goBack();
  };
  const editProcess = () => {
    console.log('clicked');
  };
  return (
    <Modal title={buttonCheckAction === 'edit' ? 'Editar Estado' : 'Cadastrar Processo'} type="register" show={show} setShow={setShow} childrenModal={children}>
      {show ? (
        <>
          <div className="modal-state">
            <form onSubmit={createProcess}>
              <label>
                ID Worflow:
                <Input elementType="input" type="text" placeholder="ID Workflow" value={workflowId} onChange={setWorkflowId} />
              </label>
              <label>
                ID Processo:
                <Input elementType={buttonCheckAction === 'edit' ? 'input' : 'disabled'} type="text" placeholder="ID Processo" value={processId} onChange={setProcessId} />
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
                <Button
                  title={buttonCheckAction === 'edit' ? 'Editar Processo' : 'Criar Novo Processo'}
                />
              </div>
            </form>
          </div>
        </>
      ) : children}
    </Modal>
  );
};

export default ModalState;
