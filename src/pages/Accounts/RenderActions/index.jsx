/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import MdContacts from 'react-ionicons/lib/MdContacts';
import MdPhonePortrait from 'react-ionicons/lib/MdPhonePortrait';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

const RenderActions = ({ data }) => {
  const history = useHistory();

  const handleClickAction = (route, id) => {
    history.push(`/app/accounts/${id}/${route}`);
  };

  return (
    <div className="render-actions">
      <button
        type="button"
        className="render-actions__button-action"
        title="Visualizar atores"
        onClick={() => handleClickAction('actors', data.id)}
      >
        <MdContacts fontSize="25px" color="#3498db" />
      </button>
      <button
        type="button"
        className="render-actions__button-action render-actions__button-action-device"
        title="Visualizar devices"
        onClick={() => handleClickAction('devices', data.id)}
      >
        <MdPhonePortrait fontSize="25px" color="#3498db" />
      </button>
    </div>
  );
};

export default RenderActions;

const accountShape = PropTypes.shape({
  id: PropTypes.string,
  created_at: PropTypes.string,
  status: PropTypes.string,
  timezone: PropTypes.string,
  name: PropTypes.string,
});

RenderActions.propTypes = {
  data: accountShape,
};

RenderActions.defaultProps = {
  data: {
    id: '',
    created_at: '',
    status: '',
    timezone: '',
    name: '',
  },
};
