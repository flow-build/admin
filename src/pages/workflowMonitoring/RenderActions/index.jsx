import React from 'react';
import MdEye from 'react-ionicons/lib/MdEye';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

const RenderActions = ({ data }) => {
  const history = useHistory();

  const handleClickAction = (workflowId, workflowName) => {
    history.push(`/app/processes/${workflowName}/${workflowId}`);
  };

  return (
    <div className="render-actions">
      <button
        type="button"
        className="render-actions__button-action"
        title="Visualizar workflow"
        onClick={() => handleClickAction(data.workflow_id, data.workflow_name)}
      >
        <MdEye fontSize="25px" color="#3498db" />
      </button>

    </div>
  );
};

export default RenderActions;

const workflowShape = PropTypes.shape({
  error: PropTypes.number,
  finished: PropTypes.number,
  inProgress: PropTypes.number,
  interrupted: PropTypes.number,
  pending: PropTypes.number,
  running: PropTypes.number,
  totalProcess: PropTypes.number,
  unstarted: PropTypes.number,
  waiting: PropTypes.number,
  warning: PropTypes.number,
  workflow_description: PropTypes.string,
  workflow_id: PropTypes.string,
  workflow_name: PropTypes.string,
  workflow_version: PropTypes.number,
});

RenderActions.propTypes = {
  data: workflowShape,
};

RenderActions.defaultProps = {
  data: {
    aborted: 0,
    error: 0,
    finished: 0,
    inProgress: 0,
    interrupted: 0,
    pending: 0,
    running: 0,
    totalProcess: 0,
    unstarted: 0,
    waiting: 0,
    warning: 0,
    workflow_description: '',
    workflow_id: '',
    workflow_name: '',
    workflow_version: 0,
  },
};
