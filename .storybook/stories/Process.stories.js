import React from 'react';
import Process from '../../src/components/Process';

export default {
    component: Process,
    title: 'Process'
};

const processItem = [
  {
    id: '#545646',
    date: '03/08/2019',
    status: 'Finalizado',
    step: '01',
    node: '05',
    next: '06',
    lastUpdate: '05/08/2019'
  },
  {
    id: '#545646',
    date: '03/08/2019',
    status: 'Andamento',
    step: '01',
    node: '05',
    next: '06',
    lastUpdate: '05/08/2019'
  },
  {
    id: '#545646',
    date: '03/08/2019',
    status: 'Atencao',
    step: '01',
    node: '05',
    next: '06',
    lastUpdate: '05/08/2019'
  },
  {
    id: '#545646',
    date: '03/08/2019',
    status: 'Finalizado',
    step: '01',
    node: '05',
    next: '06',
    lastUpdate: '05/08/2019'
  },
  {
    id: '#545646',
    date: '03/08/2019',
    status: 'Erro',
    step: '01',
    node: '05',
    next: '06',
    lastUpdate: '05/08/2019'
  }
];

export const Default = () => {
    return (
        <Process listProcessItem={processItem} />
    );
};

