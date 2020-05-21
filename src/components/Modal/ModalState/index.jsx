/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../../Button';
import Input from '../../Input';

import Modal from '..';

const actionData = () => {
  console.log('clicked');
};

const ModalState = ({
  nodeIds,
}) => {
  const [workflowId, setWorkflowId] = useState('');
  const [processId, setProcessId] = useState('');
  const [nodeId, setNodeId] = useState('');
  const [bag, setBag] = useState('');
  const [result, setResult] = useState('');
  return (
    <Modal title="Cadastro State" type="register">
      <div className="modal-state">
        <form>
          <label>
            ID Worflow:
            <Input type="text" placeholder="ID Workflow" value={workflowId} onChange={setWorkflowId} />
          </label>
          <label>
            ID Processo:
            <Input type="text" placeholder="ID Processo" value={processId} onChange={setProcessId} />
          </label>
          <label>
            ID Nó:
            <Input elementType="select" options={nodeIds} placeholder="ID Nó" value={nodeId} onChange={setNodeId} />
          </label>
          <label>
            Bag:
            <Input elementType="textarea" placeholder="Bag" value={bag} onChange={setBag} />
          </label>
          <label>
            Result:
            <Input elementType="textarea" placeholder="Result" value={result} onChange={setResult} />
          </label>
          <div className="modal-state-button">
            <Button title="Cadastrar" onClick={actionData} />
          </div>
        </form>
      </div>
    </Modal>
  );
};

ModalState.propTypes = {
  nodeIds: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string],
  )).isRequired,
};

export default ModalState;
