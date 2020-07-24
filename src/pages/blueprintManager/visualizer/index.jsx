/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactBpmn from 'react-bpmn';
import { useDispatch, useSelector } from 'react-redux';

import SpinnerLoader from '../../../components/SpinnerLoader';
// import { getBlueprint } from '../../../redux/middleware/workflow';
import { getBlueprintXML } from '../../../redux/middleware/states';
import { fileInput } from './xml';

const BlueprintManagerPage = ({
  match,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.generic.loading);
  const blueprintSpec = useSelector((state) => state.states);
  const { workflowId } = match.params;
  const { workflowName } = match.params;

  console.log('workflowId', workflowId);
  useEffect(() => {
    console.log('Le le');
    dispatch(getBlueprintXML(workflowId));
  }, [dispatch]);
  console.log(blueprintSpec);

  function onShown() {
    console.log('diagram shown');
  }

  function onLoading() {
    console.log('diagram loading');
  }

  function onError(err) {
    console.log('failed to show diagram');
    console.log(err);
  }

  return (
    <>
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <ReactBpmn
          diagramXML={fileInput}
          onShown={onShown}
          onLoading={onLoading}
          onError={onError}
        />
      )}
    </>
  );
};

export default BlueprintManagerPage;
