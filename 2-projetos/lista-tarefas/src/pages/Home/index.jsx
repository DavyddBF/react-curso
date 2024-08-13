import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './home.css';


function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    if(email !== '' && password !== '') {
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', { replace: true });
      })
      .catch(() => {
        
      })
    } else {
      alert('Preencha todos os campos!!');
    }
  }

  return (
    <div className='home-container'>
      <h1>Lista de Tarefas</h1>
      <span>Gerencie suas tarefas de uma forma prática</span>

      <form className='home-form' onSubmit={ handleLogin }>
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

        <button type="submit">Acessar</button>
      </form>

      <Link className='button-link' to='/register'>Não possui uma conta? Cadastra-se</Link>
    </div>
  );
}

export default Home;