/* eslint-disable react/prop-types */
import React from 'react';
import MdContact from 'react-ionicons/lib/MdContact';


const SideBar = ({
  children,
}) => (
  <div className="sidebar">
    <div className="sidebar-user">
      <MdContact className="sidebar-icon" />
      <p>User</p>
      {children}
    </div>
  </div>
);

export default SideBar;
