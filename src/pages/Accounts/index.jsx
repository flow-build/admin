import React, { useState, useEffect } from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import PropTypes from 'prop-types';

import SpinnerLoader from '../../components/SpinnerLoader';
import tmpAccountsMockData from '../../utils/tmp_accounts-mock-data';
import RenderActions from './RenderActions';

const Accounts = ({ label }) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const formattedData = tmpAccountsMockData.map((account) => (
      {
        ...account,
        created_at: moment(account.created_at).locale('pt-br').format('lll'),
      }
    ));
    setRowData(formattedData);
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
                <AgGridColumn headerName="Status" field="status" sortable resizable flex={1} />
                <AgGridColumn headerName="Timezone" field="timezone" sortable resizable flex={1} />
                <AgGridColumn headerName="Name" field="name" sortable resizable flex={1} />
                <AgGridColumn headerName="Ações" sortable resizable minWidth={150} cellRendererFramework={RenderActions} />
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
