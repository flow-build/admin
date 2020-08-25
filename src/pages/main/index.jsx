import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderBar from '../../components/HeaderBar';
import SpinnerLoader from '../../components/SpinnerLoader';
import LoginPage from '../login';
import SidebarPage from '../sidebar';

const MainPage = () => {
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.generic.loading);
  return (
    <>
      <HeaderBar />
      {!token ? (
        <>
          {loading ? (
            <SpinnerLoader fontSize="1" />
          ) : (
            <Route
              path={['/login', '/']}
              component={LoginPage}
            />
          )}
        </>
      ) : (
        <SidebarPage />
      )}
    </>
  );
};

export default MainPage;
