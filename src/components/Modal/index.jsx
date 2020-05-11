import React, { useState } from 'react';

import IconUtil from '../../utils/iconUtil';
import Backdrop from '../Backdrop';


const Modal = ({ children, title, type }) => { //eslint-disable-line
  const [show, setShow] = useState(true);
  return (
    <>
      <Backdrop show={show} onClick={setShow} />
      {show && (
        <div className="modal">
          <div className="modal-exit">
            <p className={`modal-title ${type}`}>{title}</p>
            <div onClick={() => setShow(false)}>  {/*eslint-disable-line*/}
              {IconUtil('Erro')}
            </div>
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
