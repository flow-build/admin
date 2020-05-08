import React from 'react';
import MdLogOut from 'react-ionicons/lib/MdLogOut';

import Logo from '../Logo/index';


const HeaderBar = () => {
  const isAuth = false;
  return (
    <header className="header-bar">
      <Logo className="logo" height="3.5" />
      {isAuth ? (
        <MdLogOut className="logout" />
      ) : null}
    </header>
  );
};

export default HeaderBar;
