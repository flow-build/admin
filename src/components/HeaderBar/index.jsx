import React from 'react';
import MdLogOut from 'react-ionicons/lib/MdLogOut';

import Logo from '../Logo/index';


const HeaderBar = () => (
  <header className="headerBar">
    <Logo styleName="logo" heightImg="2.5rem" />
    <MdLogOut className="logout" color="#fff" fontSize="2rem" />
  </header>
);

export default HeaderBar;
