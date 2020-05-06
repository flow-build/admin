import React from 'react';
import MdLogOut from 'react-ionicons/lib/MdLogOut';

import Logo from '../Logo/index';


const HeaderBar = () => (
  <header className="header-bar">
    <Logo className="logo" height="3.5" />
    <MdLogOut className="logout" />
  </header>
);

export default HeaderBar;
