import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefa] = useState([
    'Tarefa 1',
    'Tarefa 2'
  ]);

  const [nome, setNome] = useState('Davyd');

  return (
    <div>
      <ul>
        {
          tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))
        }
      </ul>

      <h1>{nome}</h1>
    </div>
  );
}

export default App;
