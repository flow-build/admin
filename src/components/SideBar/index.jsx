import React from 'react';
import MdContact from 'react-ionicons/lib/MdContact';


const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar-user">
      <MdContact className="sidebar-icon" />
      <p>User</p>
      {/* SIDEBARITEM */}
    </div>
  </div>
);

export default SideBar;
