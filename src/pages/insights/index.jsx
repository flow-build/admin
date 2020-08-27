import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { getParsedNodes } from '../../redux/middleware/nodes';

const InsightsPage = () => {
  const dispatch = useDispatch();
  const parsedNodes = useSelector((state) => state.nodes.parsedNodes);
  useEffect(() => {
    dispatch(getParsedNodes());
  }, []);
  const columnDefs = [
    {
      headerName: 'Workflow Name', field: 'workflowName', sortable: true, filter: true,
    },
    { headerName: 'Workflow Version', field: 'workflowVersion' },
    { headerName: 'Node ID', field: 'id' },
    { headerName: 'Node Type', field: 'type' },
    { headerName: 'Node Category', field: 'category' },
    { headerName: 'Node Detail', field: 'detail' },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: '90vh', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={parsedNodes}
      />
    </div>
  );
};

export default InsightsPage;
