import React from 'react';
import MdCheckmarkCircle from 'react-ionicons/lib/MdCheckmarkCircle';
import MdCloseCircle from 'react-ionicons/lib/MdCloseCircle';
import MdPlay from 'react-ionicons/lib/MdPlay';
import MdWarning from 'react-ionicons/lib/MdWarning';

import PropTypes from 'prop-types';

import Button from '../Button';


function actionData() {
  console.log('log workflow');
}

const Workflow = ({
  name, version, description, process, value1, value2, value3, value4,
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
          <li>
            <MdCheckmarkCircle className="icon-done" />
            {value1}
          </li>
          <li>
            <MdPlay className="icon-play" />
            {value2}
          </li>
          <li>
            <MdWarning className="icon-warning" />
            {value3}
          </li>
          <li>
            <MdCloseCircle className="icon-close" />
            {value4}
          </li>
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
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  value3: PropTypes.string.isRequired,
  value4: PropTypes.string.isRequired,
};

export default Workflow;
