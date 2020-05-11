import React from 'react';
import { Route } from 'react-router-dom';

import HeaderBar from '../../components/HeaderBar';
import LoginPage from '../login';

const MainPage = () => (
  <>
    <HeaderBar />
    <Route
      path="/login"
      component={LoginPage}
    />
  </>
);

export default MainPage;
