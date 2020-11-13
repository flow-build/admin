import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import PropTypes from 'prop-types';

import SpinnerLoader from '../../components/SpinnerLoader';
import tmpActorsMockData from '../../utils/tmp_actors-mock-data';

const Actors = ({ match, label }) => {
  const history = useHistory();

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (!match.params.id) {
      history.push('/app');
    }

    const formattedActors = tmpActorsMockData.map((actor) => (
      {
        ...actor,
        created_at: moment(actor.created_at).locale('pt-br').format('lll'),
        email_confirmed: moment(actor.email_confirmed).locale('pt-br').format('lll'),
      }));

    setRowData(formattedActors);
  }, []);

  return (
    <main className="actors">
      <header className="header"><h3>{label}</h3></header>
      <section className="actors__grid-container">
        {!rowData.length ? <SpinnerLoader fontSize="1" />
          : (
            <div className="ag-theme-blue actors__grid-content">
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

export default Actors;

Actors.propTypes = {
  label: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
