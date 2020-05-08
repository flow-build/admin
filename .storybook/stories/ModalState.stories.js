import React from 'react';
import ModalState from '../../src/components/Modal/ModalState';

export default {
    component: ModalState,
    title: 'ModalState'
};

export const Default = () => {
  const nodeIds = ['1', '2', '3', '4', '5'];
  return (
    <ModalState nodeIds={nodeIds}/>
  );
};
