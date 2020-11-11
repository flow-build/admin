import React from 'react';

import IconUtil from '../../utils/iconUtil';
import Backdrop from '../Backdrop';

const Modal = ({ children, title, type, show, setShow, childrenModal }) => { //eslint-disable-line
  return (
    <>
      <Backdrop show={show} onClick={setShow} />
      {show ? (
        <>
          <div className="modal">
            <div className="modal-exit">
              <p className={`modal-title title-${type}`}>{title}</p>
              <div onClick={() => setShow(false)}>  {/*eslint-disable-line*/}
                {IconUtil('Erro')}
              </div>
            </div>
            {children}
          </div>
          {childrenModal}
        </>
      ) : children}
    </>
  );
};

export default Modal;
