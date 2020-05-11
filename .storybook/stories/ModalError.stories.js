import React from 'react';
import ModalError from '../../src/components/Modal/ModalError';

export default {
    component: ModalError,
    title: 'ModalError'
};

export const Default = () => {
    return (
      <ModalError message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
    );
};
