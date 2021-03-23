import * as BiIcons from 'react-icons/bi'
import * as CgIcons from 'react-icons/cg'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io'

const SidebarData = [
  {
    title: 'Global',
    path: '/global',
    icon: <BiIcons.BiWorld />
  },
  {
    title: 'Blueprint Manager',
    path: '/blueprint_manager',
    icon: <IoIcons.IoIosPaper />,

    subNav: [
      {
        title: 'Node Manager',
        path: '/blueprint_manager/node'
      },
      {
        title: 'Lanes Manager',
        path: '/blueprint_manager/lanes'
      },
      {
        title: 'Builder',
        path: '/blueprint_manager/builder'
      }
    ]
  },
  {
    title: 'Monitoring',
    path: '/monitoring',
    icon: <FiIcons.FiMonitor />,

    subNav: [
      {
        title: 'General Stats',
        path: '/monitoring/general_stats'
      },
      {
        title: 'Process Monitoring',
        path: '/monitoring/process'
      },
      {
        title: 'Edit Process',
        path: '/monitoring/edit_process'
      },
      {
        title: 'Auditing',
        path: '/monitoring/auditing'
      }
    ]
  },
  {
    title: 'Insights',
    path: '/insights',
    icon: <CgIcons.CgInsights />,

    subNav: [
      {
        title: 'Task Performance',
        path: '/insights/task_performance'
      },
      {
        title: 'Process Performance',
        path: '/insights/process_performance'
      },
      {
        title: 'Process Network',
        path: '/insights/process_network'
      }
    ]
  },
  {
    title: 'Toolbox',
    path: '/toolbox',
    icon: <FaIcons.FaToolbox />,

    subNav: [
      {
        title: 'Notifications',
        path: '/toolbox/notifications'
      },
      {
        title: 'Permissions',
        path: '/toolbox/permissions'
      }
    ]
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIcons.IoMdSettings />,

    subNav: [
      {
        title: 'Manage Clusters',
        path: '/settings/manage_clusters'
      },
      {
        title: 'Manage Users',
        path: '/settings/manage_users'
      }
    ]
  }
]

export default SidebarData
