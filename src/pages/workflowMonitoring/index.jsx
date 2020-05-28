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
  const [filteredArray, setFilteredArray] = useState([]);
  const [initialArray, setInitialArray] = useState([]);
  const loading = useSelector((state) => state.generic.loading);
  const history = useHistory();
  const redirectProcesses = (workflowId) => {
    history.push(`/app/processes/${workflowId}`);
  };
  useEffect(() => {
    dispatch(actions.getWorkflowsStart());
  }, [dispatch]);
  const mountWorkflows = (workflow, index) => {
    const listStatus = [
      {
        icon: 'Finalizado',
        value: workflow[1].finished ? workflow[1].finished : 0,
      },
      {
        icon: 'Andamento',
        value: workflow[1].waiting ? workflow[1].waiting : workflow[1].running ? workflow[1].running : 0,
      },
      {
        icon: 'Atencao',
        value: workflow[1].unstarted ? workflow[1].unstarted : workflow[1].aborted ? workflow[1].aborted : 0,
      },
      {
        icon: 'Erro',
        value: workflow[1].error ? workflow[1].error : 0,
      },
    ];
    return (
      <Workflow
        key={index}
        name={workflow[1].workflow_name}
        version={workflow[1].workflow_version}
        description={workflow[1].workflow_description}
        clickHandler={() => redirectProcesses(workflow[0])}
        listStatus={listStatus}
      />
    );
  };
  return (
    <div className="workflow-page-container">
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <>
          <div className="workflow-page-date-range">
            <div className="workflow-page-filter">
              <Search initialArray={initialArray} setFilteredArray={setFilteredArray} filteredArray={filteredArray} />
              {/* {filteredArray.length > 0 && filteredArray.map((item, index) => (
                <div style={{ margim: '1rem' }} key={index}>
                  <p>{item} </p>
                </div>
              ))} */}
            </div>
            <DateRange initialDateArray={initialDateArray} setUpdatedDateArray={setUpdatedDateArray} updatedDateArray={updatedDateArray} />
            <Button title="Atualizar" onClick={() => dispatch(actions.getWorkflowsStart())} />
          </div>
          <div className="workflow-page-list">
            {workflowsSelector.map((workflow, index) => mountWorkflows(workflow, index))}
          </div>
        </>
      )}
    </div>
  );
};

export default WorkflowMonitoringPage;
