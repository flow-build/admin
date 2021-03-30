import * as BiIcons from 'react-icons/bi'
import * as CgIcons from 'react-icons/cg'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io'

import { v4 as uuid_v4 } from 'uuid'

export const sidebarNotLoggedIn = [
  {
    title: 'Login',
    path: '/signin',
    icon: <BiIcons.BiLogIn />,
    id: uuid_v4()
  }
]

export const sidebarLoggedIn = [
  {
    title: 'Global',
    path: '/global',
    icon: <BiIcons.BiWorld />,
    id: uuid_v4()
  },
  {
    title: 'Blueprint Manager',
    icon: <IoIcons.IoIosPaper />,
    id: uuid_v4(),

    subItems: [
      {
        title: 'Node Manager',
        path: '/blueprint_manager/node',
        id: uuid_v4()
      },
      {
        title: 'Lanes Manager',
        path: '/blueprint_manager/lanes',
        id: uuid_v4()
      },
      {
        title: 'Builder',
        path: '/blueprint_manager/builder',
        id: uuid_v4()
      }
    ]
  },
  {
    title: 'Monitoring',
    icon: <FiIcons.FiMonitor />,
    id: uuid_v4(),

    subItems: [
      {
        title: 'General Stats',
        path: '/monitoring/general_stats',
        id: uuid_v4()
      },
      {
        title: 'Process Monitoring',
        path: '/monitoring/process',
        id: uuid_v4()
      },
      {
        title: 'Edit Process',
        path: '/monitoring/edit_process',
        id: uuid_v4()
      },
      {
        title: 'Auditing',
        path: '/monitoring/auditing',
        id: uuid_v4()
      }
    ]
  },
  {
    title: 'Insights',
    icon: <CgIcons.CgInsights />,
    id: uuid_v4(),

    subItems: [
      {
        title: 'Task Performance',
        path: '/insights/task_performance',
        id: uuid_v4()
      },
      {
        title: 'Process Performance',
        path: '/insights/process_performance',
        id: uuid_v4()
      },
      {
        title: 'Process Network',
        path: '/insights/process_network',
        id: uuid_v4()
      }
    ]
  },
  {
    title: 'Toolbox',
    icon: <FaIcons.FaToolbox />,
    id: uuid_v4(),

    subItems: [
      {
        title: 'Notifications',
        path: '/toolbox/notifications',
        id: uuid_v4()
      },
      {
        title: 'Permissions',
        path: '/toolbox/permissions',
        id: uuid_v4()
      }
    ]
  },
  {
    title: 'Settings',
    icon: <IoIcons.IoMdSettings />,
    id: uuid_v4(),

    subItems: [
      {
        title: 'Manage Clusters',
        path: '/settings/manage_clusters',
        id: uuid_v4()
      },
      {
        title: 'Manage Users',
        path: '/settings/manage_users',
        id: uuid_v4()
      }
    ]
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <BiIcons.BiLogOut />,
    id: uuid_v4()
  }
]

export const headerbar = []
