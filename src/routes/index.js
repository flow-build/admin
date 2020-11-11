import Accounts from '../pages/Accounts';
import AppPage from '../pages/appPage';
import BlueprintManagerPage from '../pages/blueprintManager';
import BlueprintManager from '../pages/blueprintManager/visualizer';
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
    component: AppPage,
  },
  {
    path: '/app/bpmanager',
    label: 'BlueprintManagerPage',
    component: BlueprintManagerPage,
  },
  {
    path: '/app/blueprint/:workflowName/:workflowId',
    label: 'BlueprintManager',
    component: BlueprintManager,
  },
  {
    path: '/app/wfm',
    label: 'WorkflowMonitoring',
    component: WorkflowMonitoring,
  },
  {
    path: '/app/processes/:workflowName/:workflowId',
    label: 'Processes',
    component: Processes,
  },
  {
    path: '/app/process/:workflowName/:workflowId/:processId',
    label: 'Process',
    component: Process,
  },
  {
    path: '/app/insights',
    label: 'Insights',
    component: Insights,
  },
  {
    path: '/app/toolbox',
    label: 'Toolbox',
    component: Toolbox,
  },
  {
    path: '/app/settings',
    label: 'Settings',
    component: Settings,
  },
  {
    path: '/app/accounts',
    label: 'Accounts',
    component: Accounts,
  },
];
