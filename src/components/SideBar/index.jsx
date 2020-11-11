import React from 'react';
import MdContact from 'react-ionicons/lib/MdContact';

const SideBar = ({children}) => ( //eslint-disable-line
  <div className="sidebar">
    <div className="sidebar-user">
      <MdContact className="sidebar-icon" />
      <p className="sidebar-user-name">User</p>
      {children}
    </div>
  </div>
);

export default SideBar;
