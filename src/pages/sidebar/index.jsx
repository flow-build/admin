import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../../components/SideBar';
import SidebarItem from '../../components/SideBar/SideBarItem';
import routes from '../../routes';


const Home = () => (
  <div className="home">
    <Sidebar>
      <SidebarItem icon="Dashboard" name="Dashboard" to="/app" />
      <SidebarItem icon="Blueprint" name="Blueprint Manager" to="/app/bpmanager" />
      <SidebarItem icon="Workflow" name="Workflow Monitoring" to="/app/wfm" />
      <SidebarItem icon="Insights" name="Insights" to="/app/insights" />
      <SidebarItem icon="Toolbox" name="Toolbox" to="/app/toolbox" />
      <SidebarItem icon="Settings" name="Settings" to="/app/settings" />
    </Sidebar>
    {routes.map((route) => (
      <Route
        exact
        key={route.label}
        path={route.path}
        component={route.component}
      />
    ))}
  </div>
);

export default Home;
