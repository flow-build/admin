<<<<<<< Updated upstream
import React from 'react';

const MainPage = () => (
  <div>
    Main Page Works!
  </div>
);
=======
import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';


import HeaderBar from '../../components/HeaderBar';
import LoginPage from '../login';
import SidebarPage from '../sidebar';

const MainPage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();
  const redirectHome = (auth) => {
    setIsAuth(auth);
    history.push('/app');
  };
  return (
    <>
      <HeaderBar />
      {!isAuth ? (
        <Route
          path="/login"
          render={() => <LoginPage setIsAuth={(auth) => redirectHome(auth)} />}
        />
      ) : (
        <SidebarPage />
      )}
    </>
  );
};
>>>>>>> Stashed changes

export default MainPage;
