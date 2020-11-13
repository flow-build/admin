import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import PropTypes from 'prop-types';

import SpinnerLoader from '../../components/SpinnerLoader';
import tmpDevicesMockData from '../../utils/tmp_devices-mock-data';

const Devices = ({ match, label }) => {
  const history = useHistory();

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (!match.params.id) {
      history.push('/app');
    }

    const formattedData = tmpDevicesMockData.map((device) => ({
      ...device,
      location: {
        ...device.location,
        created_at: moment(device.location.created_at).locale('pt-br').format('lll'),
      },
    }));

    setRowData(formattedData);
  }, []);

  return (
    <main className="devices">
      <header className="header"><h3>{label}</h3></header>
      <section className="devices__grid-container">
        {!rowData.length ? <SpinnerLoader fontSize="1" />
          : (
            <div className="ag-theme-blue devices__grid-content">
              <AgGridReact
                rowData={rowData}
                gridOptions={{ rowHeight: 45 }}
              >
                <AgGridColumn>
                  <AgGridColumn headerName="Id" field="id" sortable resizable />
                  <AgGridColumn headerName="Actor_Id" field="actor_id" sortable resizable />
                  <AgGridColumn headerName="Name" field="name" sortable resizable />
                  <AgGridColumn headerName="Agent" field="agent" sortable resizable />
                  <AgGridColumn headerName="Status" field="status" sortable resizable />
                </AgGridColumn>
                <AgGridColumn
                  headerName="Profile"
                >
                  <AgGridColumn headerName="Name" field="profile.name" sortable resizable />
                  <AgGridColumn headerName="Last_name" field="profile.last_name" sortable resizable />
                  <AgGridColumn headerName="Email" field="profile.email" sortable resizable />
                  <AgGridColumn headerName="Phone" field="profile.phone" sortable resizable />
                </AgGridColumn>
                <AgGridColumn
                  headerName="Location"
                >
                  <AgGridColumn headerName="Lat" field="location.lat" sortable resizable />
                  <AgGridColumn headerName="Long" field="location.long" sortable resizable />
                  <AgGridColumn headerName="Created_at" field="location.created_at" sortable resizable />
                </AgGridColumn>
              </AgGridReact>
            </div>
          )}
      </section>
    </main>
  );
};

export default Devices;

Devices.propTypes = {
  label: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
