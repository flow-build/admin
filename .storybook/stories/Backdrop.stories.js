import React, {useState} from 'react';
import Backdrop from '../../src/components/Backdrop';

export default {
    component: Backdrop,
    title: 'Backdrop'
};

export const Default = () => {
  const [show, setShow] = useState(true);
    return (
      <Backdrop show={show} onClick={setShow} />
    );
};
