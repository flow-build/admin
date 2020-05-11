import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginPage = () => {
  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const actionData = () => {
    console.log('logou');
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <p className="login-paragraph">Login</p>
        <Input elementType="input" type="text" placeholder="Usuário" icon="User" value={userValue} onChange={setUserValue} />
        <Input elementType="input" type="text" placeholder="Senha" icon="Password" value={passValue} onChange={setPassValue} />
        <Button title="Entrar" onClick={actionData} />
      </div>
    </div>
  );
};

export default LoginPage;
