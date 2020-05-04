import React from 'react';
import MdContact from 'react-ionicons/lib/MdContact';


const SideBar = () => (
  <div className="sideBar">
    <div className="sideBar-user">
      <MdContact color="#b1c2c6" fontSize="5rem" />
      <p>User</p>
      {/* SIDEBARITEM */}
    </div>
  </div>
);

export default SideBar;
