import { useState } from 'react';
import './home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='home-container'>
      <h1>Lista de Tarefas</h1>
      <span>Gerencie suas tarefas de uma forma prática</span>

      <form>
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
    </div>
  );
}

export default Home;