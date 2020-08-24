import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from '../../redux/middleware/auth';
import iconUtil from '../../utils/iconUtil';
import Logo from '../Logo/index';


const HeaderBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const { signOut } = useGoogleLogout({
    clientId: process.env.GOOGLE_CLIENT_ID,
  });
  const logoutUser = () => {
    signOut();
    dispatch(logout());
    history.push('/login');
  };
  return (
    <header className="header-bar">
      <Logo className="logo" height="3.5" />
      {token && iconUtil('LogoutHeader', logoutUser)}
    </header>
  );
};

export default HeaderBar;
