import React from 'react';

import PropTypes from 'prop-types';

import Modal from '..';

const ModalError = ({
  message,
}) => (
  <Modal title="Algo inesperado ocorreu" type="error">
    <div className="modal-error-container">
      <p className="modal-error-message">{message}</p>
    </div>
  </Modal>
);

ModalError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ModalError;
