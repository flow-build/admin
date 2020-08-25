import React from 'react';
import Process from '../../src/components/Process';

export default {
    component: Process,
    title: 'Process'
};

const processList = [
  {
    id: '#1',
    createdAt: '2020-05-12T13:23:26.531Z',
    status: 'unstarted',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '2020-05-13T13:23:26.531Z',
  },
  {
    id: '#2',
    createdAt: '2020-05-12T13:26:10.737Z',
    status: 'waiting',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '2020-05-12T13:28:26.531Z',
  },
  {
    id: '#3',
    createdAt: '2020-05-12T13:23:15.258Z',
    status: 'finished',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '10/08/2020',
  },
  {
    id: '#4',
    createdAt: '2020-05-12T13:23:20.632Z',
    status: 'error',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '10/08/2020',
  },
  {
    id: '#5',
    createdAt: '2020-05-10T13:24:29.551Z',
    status: 'waiting',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '10/08/2020',
  },
  {
    id: '#6',
    createdAt: '2020-05-11T13:23:26.531Z',
    status: 'unstarted',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '2020-05-12T13:23:26.531Z',
  },
  {
    id: '#7',
    createdAt: '2020-05-12T13:23:10.737Z',
    status: 'waiting',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '2020-05-12T13:23:26.531Z',
  },
  {
    id: '#8',
    createdAt: '2020-05-12T13:42:10.737Z',
    status: 'finished',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '2020-05-12T15:23:15.258Z',
  },
  {
    id: '#9',
    createdAt: '2020-05-12T13:23:20.632Z',
    status: 'error',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '10/08/2020',
  },
  {
    id: '#10',
    createdAt: '2020-05-10T13:24:29.551Z',
    status: 'waiting',
    stepNumber: 1,
    nodeId: '05',
    nextNodeId: '06',
    lastUpdated: '10/08/2020',
  },
];

export const Default = () => {
    return (
        <Process listProcessItem={processList} />
    );
};

