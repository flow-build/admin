import React, { useState } from 'react';

import Button from '../../../components/Button';
import DateRange from '../../../components/DateRange';
import Process from '../../../components/Process';


const Processes = () => {
  const processList = [
    {
      id: '#c323a130-9453-11ea-9718-d7a8211260521',
      createdAt: '2020-05-12T13:23:26.531Z',
      status: 'unstarted',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-13T13:23:26.531Z',
    },
    {
      id: '#b4dcd830-9453-11ea-9718-d7a8211260522',
      createdAt: '2020-05-12T13:26:10.737Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T13:28:26.531Z',
    },
    {
      id: '#b4e67520-9453-11ea-9718-d7a8211260523',
      createdAt: '2020-05-12T13:23:15.258Z',
      status: 'finished',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: '#b9b9a810-9453-11ea-9718-d7a8211260524',
      createdAt: '2020-05-12T13:23:20.632Z',
      status: 'error',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: '#bc616f80-9453-11ea-9718-d7a8211260525',
      createdAt: '2020-05-10T13:24:29.551Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: '#c323a130-9453-11ea-9718-d7a8211260526',
      createdAt: '2020-05-11T13:23:26.531Z',
      status: 'unstarted',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T13:23:26.531Z',
    },
    {
      id: '#b4dcd830-9453-11ea-9718-d7a8211260527',
      createdAt: '2020-05-12T13:23:10.737Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T13:23:26.531Z',
    },
    {
      id: '#b4e67520-9453-11ea-9718-d7a8211260528',
      createdAt: '2020-05-12T13:42:10.737Z',
      status: 'finished',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '2020-05-12T15:23:15.258Z',
    },
    {
      id: '#b9b9a810-9453-11ea-9718-d7a8211260529',
      createdAt: '2020-05-12T13:23:20.632Z',
      status: 'error',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
    {
      id: '#bc616f80-9453-11ea-9718-d7a82112605210',
      createdAt: '2020-05-10T13:24:29.551Z',
      status: 'waiting',
      stepNumber: 1,
      nodeId: '05',
      nextNodeId: '06',
      lastUpdated: '10/08/2020',
    },
  ];
  const initialDateArray = [new Date('3/12/2020'), new Date('7/27/2020')];
  const [updatedDateArray, setUpdatedDateArray] = useState([]);
  const actionData = () => {
    console.log('log processes');
  };
  return (
    <div className="processes-container">
      <div className="processes-filter">
        <DateRange initialDateArray={initialDateArray} setUpdatedDateArray={setUpdatedDateArray} updatedDateArray={updatedDateArray} />
        <Button title="atualizar" onClick={actionData} />
      </div>
      <div className="processes-table">
        <p className="processes-page-title">Processos</p>
        <Process listProcessItem={processList} />
      </div>
    </div>
  );
};

export default Processes;
