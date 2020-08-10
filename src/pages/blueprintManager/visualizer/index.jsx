/* eslint-disable import/extensions */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BPMNModeler, { modeler } from '../../../components/BPMNModeler';
import SpinnerLoader from '../../../components/SpinnerLoader';
import { getBlueprintXML } from '../../../redux/middleware/states';
import { getWorkflow, getWorkflows } from '../../../redux/middleware/workflow';

const BlueprintManagerPage = ({
  match,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.generic.loading);
  const diagramXML = useSelector((state) => state.states.blueprintSpec);
  const { workflowId } = match.params;
  const { workflowName } = match.params;
  const history = useHistory();

  useEffect(() => {
    dispatch(getWorkflow(workflowId));
    dispatch(getWorkflows());
    dispatch(getBlueprintXML(workflowId));
  }, [dispatch]);

  const workflows = useSelector((state) => state.workflow.workflows);

  const currentWorkflow = useSelector((state) => state.workflow.currentWorkflow);
  const startProcessIds = Object.keys(currentWorkflow).includes('blueprint_spec')
    && currentWorkflow.blueprint_spec.nodes
      .filter((node) => node.type.toLowerCase() === 'systemtask')
      .filter((node) => node.category.toLowerCase() === 'startprocess')
      .map((node) => ({
        id: `Node_${node.id}`,
        name: node.parameters.workflow_name,
      }));


  const [importDone, setImportDone] = useState(false);
  modeler.on('import.done', () => {
    setImportDone(true);
  });

  const overlays = modeler.get('overlays');
  if (importDone && startProcessIds && workflows && workflows.length !== 0) {
    startProcessIds.forEach(({ id, name }) => {
      console.log(name);
      const nextWorkflow = workflows
        .find((workflow) => workflow.workflow_name === name);
      const link = `${window.location.protocol}//${window.location.host}/app/blueprint/${name}/${nextWorkflow.workflow_id}`;
      console.log(history);
      console.log(match);
      overlays.add(id, {
        position: {
          bottom: 0,
          left: 0,
        },
        html: `<a target="_blank" href="${link}">Ver</a>`,
      });
    });
  }

  return (
    <>
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <BPMNModeler diagramXML={diagramXML} />
      )}
    </>
  );
};

export default BlueprintManagerPage;
