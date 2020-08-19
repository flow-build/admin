/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactJson from 'react-json-view';

import IconUtil, { convertIcon } from '../../utils/iconUtil';

const JsonReader = ({
  processObject,
}) => {
  const statusName = convertIcon(processObject.status);
  return (
    <div className="json-container">
      <div className="json-row">
        <div className="json-row-step-number">
          <p>{processObject.stepNumber}</p>
        </div>
        { processObject.engineId && (
          <div className="json-row-engine-id">
            <h2>Engine ID</h2>
            <p>{processObject.engineId}</p>
          </div>
        )}

      </div>
      <div className="json-create-status">
        <p>{processObject.createdAt}</p>
        <p className="json-status-paragraph">{IconUtil(statusName)} {processObject.status} </p>
      </div>
      <div className="json-reader">
        <p>Bag:</p>
        <div className="json-reader-content">
          <ReactJson src={processObject.bag} displayDataTypes={false} onAdd={(add) => {}} onEdit={(edit) => {}} onDelete={(del) => {}} />
        </div>
      </div>
      <div className="json-reader">
        <p>Result:</p>
        <div className="json-reader-content">
          <ReactJson src={processObject.result} displayDataTypes={false} onAdd={(add) => {}} onEdit={(edit) => {}} onDelete={(del) => {}} />
        </div>
      </div>
    </div>
  );
};

export default JsonReader;
