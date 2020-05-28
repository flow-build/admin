/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import * as actions from '../../redux/actions';
import notification from '../../utils/notification';


const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onAuth = () => dispatch(actions.auth());
  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [error, setError] = useState(false);
  const validateLoginUser = (event) => {
    event.preventDefault();
    let validation = {
      message: '',
      check: true,
    };
    if (validation.check && (userValue === '' || passValue === '')) {
      validation = {
        message: 'Os campos não podem ser vazios',
        check: false,
      };
    }
    if (validation.check && (userValue !== 'admin' || passValue !== 'admin')) {
      validation = {
        message: 'Usuário e senha inválidos',
        check: false,
      };
    }
    if (!validation.check) {
      setError(true);
      notification(
        'Erro ao realizar o login',
        validation.message,
        'danger',
        4000,
      );
    } else {
      onAuth();
      history.push('/app');
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={validateLoginUser}>
        <div className="login-form">
          <p className="login-paragraph">Login</p>
          <Input elementType="input" type="text" placeholder="Usuário" icon="User" value={userValue} onChange={setUserValue} error={error} onFocus={() => setError(false)} />
          <Input elementType="input" type="password" placeholder="Senha" icon="Password" value={passValue} onChange={setPassValue} error={error} onFocus={() => setError(false)} />
          <Button title="Entrar" />
        </div>
      </form>
    </div>
  );
};


export default LoginPage;
