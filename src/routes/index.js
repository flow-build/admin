import Accounts from '../pages/Accounts';
import Actors from '../pages/Actors';
import AppPage from '../pages/appPage';
import BlueprintManagerPage from '../pages/blueprintManager';
import BlueprintManager from '../pages/blueprintManager/visualizer';
import Devices from '../pages/Devices';
import Insights from '../pages/insights';
import Settings from '../pages/settings';
import Toolbox from '../pages/toolbox';
import WorkflowMonitoring from '../pages/workflowMonitoring';
import Processes from '../pages/workflowMonitoring/processes';
import Process from '../pages/workflowMonitoring/processes/process';

export default [
  {
    path: '/app',
    label: 'App',
    Component: AppPage,
  },
  {
    path: '/app/bpmanager',
    label: 'BlueprintManagerPage',
    Component: BlueprintManagerPage,
  },
  {
    path: '/app/blueprint/:workflowName/:workflowId',
    label: 'BlueprintManager',
    Component: BlueprintManager,
  },
  {
    path: '/app/wfm',
    label: 'Workflow Monitoring',
    Component: WorkflowMonitoring,
  },
  {
    path: '/app/processes/:workflowName/:workflowId',
    label: 'Processos',
    Component: Processes,
  },
  {
    path: '/app/process/:workflowName/:workflowId/:processId',
    label: 'Process',
    Component: Process,
  },
  {
    path: '/app/insights',
    label: 'Insights',
    Component: Insights,
  },
  {
    path: '/app/toolbox',
    label: 'Toolbox',
    Component: Toolbox,
  },
  {
    path: '/app/settings',
    label: 'Settings',
    Component: Settings,
  },
  {
    path: '/app/accounts',
    label: 'Consultar Accounts',
    Component: Accounts,
  },
  {
    path: '/app/accounts/:id/actors',
    label: 'Consultar actors de uma account',
    Component: Actors,
  },
  {
    path: '/app/accounts/:id/devices',
    label: 'Consultar devices de uma account',
    Component: Devices,
  },
];
