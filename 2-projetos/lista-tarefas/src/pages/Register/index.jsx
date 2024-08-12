import { useState } from 'react';

import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCadastrar(event) {
    event.preventDefault();

    if(email !== '' && password !== '') {
      alert('Teste');
    } else {
      alert('Preencha todos os campos!!');
    }
  }

  return (
    <div className='home-container'>
      <h1>Cadastrar</h1>
      <span>Poucos passos de ter sua própria lista de tarefas</span>

      <form className='home-form' onSubmit={ handleCadastrar }>
        <input 
          type="text"
          placeholder="Digite seu email..."
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />

        <input
          autoComplete="false"
          type="password"
          placeholder="********"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link className='button-link' to='/'>Já possui uma conta? Faça o seu login!</Link>
    </div>
  );
}

export default Register;