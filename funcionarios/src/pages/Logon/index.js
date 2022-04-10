import React, { useState } from 'react';

import api from '../../services/api';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../img/LogoLGRolamentosLogin.png'

import './styles.css';

function Logon() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('api/auth/login', { name, password });
      localStorage.setItem('token', response.data.token);
      
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
      <div className='login'> 
        <Container component="main" maxWidth='xs'>
          <div className='mt-3 mt-md-5 d-flex flex-column align-items-center'>
            <img className='' src={Logo} alt='Logo'/>
          </div>

          <form onSubmit={handleLogin} className='form'>
            <TextField className='mb-4' 
              helperText=""
              id="name" 
              color='primary'
              label="Usuário" 
              value={name}
              onChange={e => setName(e.target.value)}
              variant="standard"
              fullWidth
              required
              type="text" />

            <TextField className='mb-3'
              id="password" 
              color='primary'
              label="Senha" 
              variant="standard"
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
              required
              type="password" />

              <Link className='ms-1' href="">Esqueci minha senha</Link>

            <button className="button" type="submit">Entrar</button>
          </form>
        </Container>
      </div>
      );
}

export default Logon;