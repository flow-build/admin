import React, { useState, useEffect } from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import PropTypes from 'prop-types';

import SpinnerLoader from '../../components/SpinnerLoader';
import tmpAccountsMockData from '../../utils/tmp_accounts-mock-data';

const Accounts = ({ label }) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(tmpAccountsMockData);
  }, []);

  return (
    <main className="accounts">
      <header className="header">
        <h3>{label}</h3>
      </header>

      <section className="accounts__grid-container">
        {!rowData.length ? <SpinnerLoader fontSize="1" />
          : (
            <div className="ag-theme-blue accounts__grid-content">
              <AgGridReact
                rowData={rowData}
                gridOptions={{ rowHeight: 45 }}
              >
                <AgGridColumn headerName="Id" field="id" sortable resizable flex={1} />
                <AgGridColumn headerName="Created_at" field="created_at" sortable resizable flex={1} />
                <AgGridColumn headerName="Name" field="name" sortable resizable flex={1} />
                <AgGridColumn headerName="Last_name" field="last_name" sortable resizable flex={1} />
                <AgGridColumn headerName="Email" field="email" sortable resizable flex={1} />
                <AgGridColumn headerName="Email_confirmed" field="email_confirmed" sortable resizable flex={1} />
                <AgGridColumn headerName="Hierarchy" field="hierarchy" sortable resizable flex={1} />
              </AgGridReact>
            </div>
          )}

      </section>
    </main>
  );
};

export default Accounts;

Accounts.propTypes = {
  label: PropTypes.string.isRequired,
};
