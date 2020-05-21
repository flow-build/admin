import React, { useState } from 'react';

import Button from '../../../components/Button';
import JsonReader from '../../../components/JsonReader';
import ModalState from '../../../components/Modal/ModalState';
import Process from '../../../components/Process';

const ProcessPage = () => {
  const nodeIds = ['1', '2', '3', '4', '5'];
  const jsonObject = {
    glossary: {
      title: 'example glossary',
      GlossDiv: {
        title: 'S',
        GlossList: {
          GlossEntry: {
            ID: 'SGML',
            SortAs: 'SGML',
            GlossTerm: 'Standard Generalized Markup Language',
            Acronym: 'SGML',
            Abbrev: 'ISO 8879:1986',
            GlossDef: {
              para: 'A meta-markup language, used to create markup languages such as DocBook.',
              GlossSeeAlso: ['GML', 'XML'],
            },
            GlossSee: 'markup',
          },
        },
      },
    },
  };
  const [processObject, setProcessObject] = useState({
    stepNumber: 0,
    createdAt: '',
    status: '',
    bag: jsonObject,
    result: jsonObject,
  });
  const [show, setShow] = useState(false);
  const createProcess = () => {
    setShow(true);
  };
  const editProcess = () => {
    setShow(true);
  };
  const abortProcess = () => {
    alert('abortProcess');
  };
  const readProcess = (processitem) => {
    setProcessObject({
      stepNumber: processitem.stepNumber,
      createdAt: processitem.createdAt,
      status: processitem.status,
      bag: jsonObject,
      result: jsonObject,
    });
  };
  const processList = [
    {
      id: 'c323a130-9453-11ea-9718-d7a8211260521',
      createdAt: '2020-05-12T13:23:26.531Z',
      status: 'unstarted',
      stepNumber: 2,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-13T13:23:26.531Z',
    },
    {
      id: 'b4dcd830-9453-11ea-9718-d7a8211260522',
      createdAt: '2020-05-12T13:26:10.737Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T13:28:26.531Z',
    },
    {
      id: 'b4e67520-9453-11ea-9718-d7a8211260523',
      createdAt: '2020-05-12T13:23:15.258Z',
      status: 'finished',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: 'b9b9a810-9453-11ea-9718-d7a8211260524',
      createdAt: '2020-05-12T13:23:20.632Z',
      status: 'error',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: 'bc616f80-9453-11ea-9718-d7a8211260525',
      createdAt: '2020-05-10T13:24:29.551Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: 'c323a130-9453-11ea-9718-d7a8211260526',
      createdAt: '2020-05-11T13:23:26.531Z',
      status: 'unstarted',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T13:23:26.531Z',
    },
    {
      id: 'b4dcd830-9453-11ea-9718-d7a8211260527',
      createdAt: '2020-05-12T13:23:10.737Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T13:23:26.531Z',
    },
    {
      id: 'b4e67520-9453-11ea-9718-d7a8211260528',
      createdAt: '2020-05-12T13:42:10.737Z',
      status: 'finished',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T15:23:15.258Z',
    },
    {
      id: 'b9b9a810-9453-11ea-9718-d7a8211260529',
      createdAt: '2020-05-12T13:23:20.632Z',
      status: 'error',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: 'bc616f80-9453-11ea-9718-d7a82112605210',
      createdAt: '2020-05-10T13:24:29.551Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
  ];
  return (
    <ModalState nodeIds={nodeIds} show={show} setShow={setShow}>
      <div className="process-page-container">
        <div className="process-page-actions">
          <Button title="Criar novo processo a partir de " onClick={createProcess} />
          <Button title="Editar estado do processo" onClick={editProcess} />
          <Button title="Abortar processo" onClick={abortProcess} color="red" />
        </div>
        <div className="process-page-content">
          <div className="processes-table">
            <Process listProcessItem={processList} processAction={(processitem) => readProcess(processitem)} processCheck />
          </div>
          <div className="process-page-json">
            <JsonReader processObject={processObject} />
          </div>
        </div>
      </div>
    </ModalState>
  );
};

export default ProcessPage;
