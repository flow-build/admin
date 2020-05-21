import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import iconUtil from '../../../utils/iconUtil';


const SideBarItem = ({
  icon, name, to,
}) => (
  <NavLink to={to} activeClassName="sidebar-item-active" className="sidebar-item" exact>
    {iconUtil(icon)}
    {name}
  </NavLink>
);

SideBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default SideBarItem;
