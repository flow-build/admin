/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import DateRange from '../../components/DateRange';
import Search from '../../components/Search';
import SpinnerLoader from '../../components/SpinnerLoader';
import Workflow from '../../components/Workflow';
import * as actions from '../../redux/actions';


const WorkflowMonitoringPage = () => {
  const dispatch = useDispatch();
  const workflowsSelector = useSelector((state) => state.workflow.workflows);
  const initialDateArray = [new Date('3/12/2020'), new Date('7/27/2020')];
  const [updatedDateArray, setUpdatedDateArray] = useState([]);
  const [filteredWorkflowNames, setFilteredWorkflowArray] = useState([]);
  const workflowNames = useSelector((state) => state.workflow.workflowNames);
  const loading = useSelector((state) => state.generic.loading);
  const history = useHistory();
  const redirectProcesses = (workflowId, workflowName) => {
    history.push(`/app/processes/${workflowName}/${workflowId}`);
  };
  useEffect(() => {
    dispatch(actions.getWorkflowsStart());
  }, [dispatch]);
  const mountWorkflows = (workflow, index) => {
    const listStatus = [
      {
        icon: 'Finalizado',
        value: workflow.finished,
      },
      {
        icon: 'Andamento',
        value: workflow.waiting + workflow.running,
      },
      {
        icon: 'Atencao',
        value: workflow.unstarted + workflow.aborted + workflow.pending,
      },
      {
        icon: 'Erro',
        value: workflow.error + workflow.interrupted,
      },
    ];
    if (filteredWorkflowNames.indexOf(workflow.workflow_name) > -1) {
      return (
        <Workflow
          key={index}
          name={workflow.workflow_name}
          version={workflow.workflow_version}
          description={workflow.workflow_description}
          clickHandler={() => redirectProcesses(workflow.workflow_id, workflow.workflow_name)}
          listStatus={listStatus}
        />
      );
    }
    return null;
  };
  return (
    <div className="workflow-page-container">
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <>
          <div className="workflow-page-date-range">
            <div className="workflow-page-filter">
              <Search initialArray={workflowNames} setFilteredArray={setFilteredWorkflowArray} filteredArray={filteredWorkflowNames} />
            </div>
            <DateRange initialDateArray={initialDateArray} setUpdatedDateArray={setUpdatedDateArray} updatedDateArray={updatedDateArray} />
            <Button title="Atualizar" onClick={() => dispatch(actions.getWorkflowsStart())} />
          </div>
          <div className="workflow-page-list">
            {filteredWorkflowNames.length > 0 && workflowsSelector.map((workflow, index) => mountWorkflows(workflow, index))}
          </div>
        </>
      )}
    </div>
  );
};

export default WorkflowMonitoringPage;
