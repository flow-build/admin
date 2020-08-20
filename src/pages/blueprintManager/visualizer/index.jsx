import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import BPMNModeler, { modeler, getXML } from '../../../components/BPMNModeler';
import Button from '../../../components/Button';
import SpinnerLoader from '../../../components/SpinnerLoader';
import { getBlueprintXML } from '../../../redux/middleware/states';
import { getWorkflow, getWorkflows } from '../../../redux/middleware/workflow';
import { downloadFile } from '../../../utils/downloader';

const BlueprintVisualizer = ({
  match,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.generic.loading);
  const diagramXML = useSelector((state) => state.states.blueprintSpec);
  const { workflowId, workflowName } = match.params;
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
      if (nextWorkflow) {
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
      }
    });
  }

  const exportDiagram = async () => {
    try {
      const { xml } = await getXML();
      downloadFile(xml, `${workflowName}.bpmn`, 'text/xml');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <div className="bpmn-modeler-container">
          <div className="bpmn-modeler-actions">
            <Button title="Exportar" onClick={exportDiagram} />
          </div>
          <BPMNModeler diagramXML={diagramXML} className="bpmn-modeler-diagram" />
        </div>
      )}
    </>
  );
};

BlueprintVisualizer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      workflowId: PropTypes.string,
      workflowName: PropTypes.string,
    }),
  }).isRequired,
};

export default BlueprintVisualizer;
