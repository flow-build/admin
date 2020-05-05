import React from 'react';

import PropTypes from 'prop-types';

import IconUtil from '../../utils/iconUtil';
import Button from '../Button';


function actionData() {
  console.log('log workflow');
}

const Workflow = ({
  name, version, description, process, listStatus,
}) => (
  <div className="workflow-container">
    <div className="workflow-content">
      <div>
        <p className="workflow-version">
          {version}
        </p>
        <p className="workflow-name">
          {name}
        </p>
      </div>
      <div className="workflow-status">
        <ul>
          {listStatus.map((status) => (
            <li>
              {IconUtil(status.icon)} {status.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="workflow-description">
      <p>
        {description}
      </p>
    </div>
    <div className="workflow-bottom">
      <p className="workflow-process">
        {`processos (${process})`}
      </p>
      <Button title="Visualizar" onClick={actionData} />
    </div>
  </div>
);

Workflow.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
  listStatus: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.string],
  )).isRequired,
};

export default Workflow;
