import React from 'react';
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as authMiddleware from '../../redux/middleware/auth';
import notification from '../../utils/notification';


const getEmailFromResponse = (responseData) => responseData.rt.$t;

const isAuthorized = async () => {
  // Implementar aqui a lógica de autorização real
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
  return promise;
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onAuth = () => dispatch(authMiddleware.auth());
  const { signOut } = useGoogleLogout({
    clientId: process.env.GOOGLE_CLIENT_ID,
  });


  const onLoginSuccess = async (response) => {
    const email = getEmailFromResponse(response);
    const authorizedToLogin = await isAuthorized(email);
    if (authorizedToLogin) {
      onAuth();
      history.push('/app/wfm');
    } else {
      notification('Não autorizado',
        'Usuário não possui autorização para logar no sistema',
        'danger',
        5000);
      signOut();
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          onSuccess={onLoginSuccess}
        />
      </div>
    </div>
  );
};

export default LoginPage;
