import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import PropTypes from 'prop-types';

import SpinnerLoader from '../../components/SpinnerLoader';
import { getWorkflows } from '../../redux/middleware/workflow';
import IconUtil from '../../utils/iconUtil';
import RenderActions from './RenderActions';

const WorkflowMonitoringPage = ({ label }) => {
  const dispatch = useDispatch();
  const workflowsSelector = useSelector((state) => state.workflow.workflows);

  const loading = useSelector((state) => state.generic.loading);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    dispatch(getWorkflows());
  }, []);

  const renderProcessHeader = (status, headerName) => (
    <div className="workflow-monitoring__grid-content-header">
      <span>{IconUtil(status)}</span>
      <span className="ag-header-cell-text">{headerName || status}</span>
    </div>
  );

  useEffect(() => {
    if (workflowsSelector.length > 0) {
      const formattedWorkflows = workflowsSelector.map((workflow) => ({
        ...workflow,
        totalProcess: [
          workflow.finished,
          workflow.waiting + workflow.running,
          workflow.unstarted + workflow.aborted + workflow.pending,
          workflow.error + workflow.interrupted,
        ].reduce((acc, statusValue) => acc + statusValue, 0),
        inProgress: workflow.waiting + workflow.running,
        warning: workflow.unstarted + workflow.aborted + workflow.pending,
        error: workflow.error + workflow.interrupted,
      }));

      setRowData(formattedWorkflows);
    }
  }, [workflowsSelector]);

  return (
    <main className="workflow-monitoring workflow-page-container">
      <header className="header"><h3>{label}</h3></header>
      {loading ? (
        <SpinnerLoader fontSize="1" />
      ) : (
        <section className="workflow-monitoring__grid-container">
          {!rowData.length ? <SpinnerLoader fontSize="1" />
            : (
              <div className="ag-theme-blue workflow-monitoring__grid-content">
                <AgGridReact
                  rowData={rowData}
                  gridOptions={{ rowHeight: 45 }}
                >
                  <AgGridColumn headerName="Workflow_id" field="workflow_id" sortable resizable flex={1} />
                  <AgGridColumn headerName="Workflow_name" field="workflow_name" sortable resizable flex={1} />
                  <AgGridColumn headerName="Workflow_description" field="workflow_description" sortable resizable flex={1} />
                  <AgGridColumn headerName="Workflow_version" field="workflow_version" sortable resizable flex={1} />
                  <AgGridColumn headerName="Total_process" field="totalProcess" sortable resizable flex={1} />
                  <AgGridColumn headerName="Finished" field="finished" sortable resizable flex={1} headerComponentFramework={() => renderProcessHeader('Finished')} />
                  <AgGridColumn headerName="In_Progress" field="inProgress" sortable resizable flex={1} headerComponentFramework={() => renderProcessHeader('InProgress', 'In_Progress')} />
                  <AgGridColumn headerName="Warning" field="warning" sortable resizable flex={1} headerComponentFramework={() => renderProcessHeader('Warning')} />
                  <AgGridColumn headerName="Error" field="error" sortable resizable flex={1} headerComponentFramework={() => renderProcessHeader('Error')} />
                  <AgGridColumn headerName="Ações" resizable minWidth={100} cellRendererFramework={RenderActions} />
                </AgGridReact>
              </div>
            )}
        </section>
      )}
    </main>
  );
};

export default WorkflowMonitoringPage;

WorkflowMonitoringPage.propTypes = {
  label: PropTypes.string.isRequired,
};
