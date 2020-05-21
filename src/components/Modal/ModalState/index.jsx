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
  nodeIds, children, show, setShow, //eslint-disable-line
}) => {
  const [workflowId, setWorkflowId] = useState('');
  const [processId, setProcessId] = useState('');
  const [nodeId, setNodeId] = useState('');
  const [bag, setBag] = useState('');
  const [result, setResult] = useState('');
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
        </>
      ) : children}
    </Modal>
  );
};

ModalState.propTypes = {
  nodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModalState;
