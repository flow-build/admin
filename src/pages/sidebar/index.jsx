/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

import Sidebar from '../../components/SideBar';
import SidebarItem from '../../components/SideBar/SideBarItem';
import { logout } from '../../redux/middleware/auth';
import routes from '../../routes';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutUser = () => {
    dispatch(logout());
    history.push('/login');
  };
  return (
    <div className="home">
      <Sidebar>
        <SidebarItem icon="Dashboard" name="Dashboard" to="/app" />
        <SidebarItem icon="Filing" name="Consultar Accounts" to="/app/accounts" />
        <SidebarItem icon="Blueprint" name="Blueprint Manager" to="/app/bpmanager" />
        <SidebarItem icon="Workflow" name="Workflow Monitoring" to="/app/wfm" />
        <SidebarItem icon="Insights" name="Insights" to="/app/insights" />
        <SidebarItem icon="Toolbox" name="Toolbox" to="/app/toolbox" />
        <SidebarItem icon="Settings" name="Settings" to="/app/settings" />
        <SidebarItem icon="Logout" name="Logout" to="/login" onClick={logoutUser} />
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
};

export default Home;
