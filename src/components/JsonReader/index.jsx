/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactJson from 'react-json-view';

import IconUtil, { convertIcon } from '../../utils/iconUtil';

const JsonReader = ({
  processObject,
}) => {
  const statusName = convertIcon(processObject.status);
  return (
    <div className="json-container">
      <div className="json-step-number">
        <p>{processObject.stepNumber}</p>
      </div>
      <div className="json-create-status">
        <p>{processObject.createdAt}</p>
        <p className="json-status-paragraph">{IconUtil(statusName)} {statusName} </p>
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
