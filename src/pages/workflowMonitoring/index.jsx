/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import DateRange from '../../components/DateRange';
import Search from '../../components/Search';
import SpinnerLoader from '../../components/SpinnerLoader';
import Workflow from '../../components/Workflow';
import axios from '../../utils/axios';


const WorkflowMonitoringPage = ({
  token,
}) => {
  const [workflows, setWorkflows] = useState([]);
  const initialDateArray = [new Date('3/12/2020'), new Date('7/27/2020')];
  const [updatedDateArray, setUpdatedDateArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const initialArray = [];
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const redirectProcesses = () => {
    history.push('/app/processes/');
  };
  useEffect(() => {
    async function getWorkflows() {
      await axios.get('/cockpit/workflows/stats', { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
        setWorkflows(Object.keys(response.data.workflows).map((key) => {
          return [key, response.data.workflows[key]];
        }));
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    }
    getWorkflows();
  }, []);
  const mountWorkflows = (workflow, index) => {
    const listStatus = [
      {
        icon: 'Finalizado',
        value: workflow.finished ? workflow.finished : 0,
      },
      {
        icon: 'Andamento',
        value: workflow.waiting ? workflow.waiting : 0,
      },
      {
        icon: 'Atencao',
        value: workflow.warning ? workflow.warning : 0,
      },
      {
        icon: 'Erro',
        value: workflow.error ? workflow.error : 0,
      },
    ];
    return (
      <Workflow
        key={index}
        name={workflow.workflow_name}
        version={workflow.workflow_version}
        description={workflow.workflow_description}
        clickHandler={redirectProcesses}
        listStatus={listStatus}
      />
    );
  };
  return (
    <div className="workflow-page-container">
      <div className="workflow-page-date-range">
        <div className="workflow-page-filter">
          <Search initialArray={initialArray} setFilteredArray={setFilteredArray} filteredArray={filteredArray} />
          {filteredArray.length > 0 && filteredArray.map((item, index) => (
            <div style={{ margim: '1rem' }} key={index}>
              <p>{item} </p>
            </div>
          ))}
        </div>
        <DateRange initialDateArray={initialDateArray} setUpdatedDateArray={setUpdatedDateArray} updatedDateArray={updatedDateArray} />
      </div>
      <div className="workflow-page-list">
        {loading ? (
          <SpinnerLoader fontSize="1" />
        ) : (
          workflows.map((workflow, index) => mountWorkflows(workflow[1], index))
        )}
      </div>
    </div>
  );
};

WorkflowMonitoringPage.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(WorkflowMonitoringPage);
