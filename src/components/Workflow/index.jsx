import React from 'react';

import PropTypes from 'prop-types';

import IconUtil from '../../utils/iconUtil';
import Button from '../Button';

const Workflow = ({
  name, version, description, listStatus, clickHandler,
}) => {
  let totalProcess = 0;
  const mountStatus = (status, index) => {
    totalProcess += status.value;
    return (
      <li key={index} title={status.icon}>
        {IconUtil(status.icon)} {status.value}
      </li>
    );
  };
  return (
    <div className="workflow-container">
      <div className="workflow-content">
        <div className="workflow-header">
          <p className="workflow-version" title="Versão">
            {version}
          </p>
        </div>
        {listStatus ? (
          <div className="workflow-status">
            <ul>
              {listStatus.map((status, index) => (
                mountStatus(status, index)
              ))}
            </ul>
          </div>
        ) : (<div className="workflow-status" />)}
      </div>
      <p className="workflow-name">
        {name}
      </p>
      <div className="workflow-description">
        <p>
          {description}
        </p>
      </div>
      <div className="workflow-bottom">
        <p className="workflow-process">
          {listStatus && `processos (${totalProcess})`}
        </p>
        <Button title="Visualizar" onClick={clickHandler} />
      </div>
    </div>
  );
};

Workflow.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  listStatus: PropTypes.arrayOf(PropTypes.shape(
    [PropTypes.string, PropTypes.string],
  )),
  clickHandler: PropTypes.func.isRequired,
};

Workflow.defaultProps = {
  listStatus: null,
};

export default Workflow;
