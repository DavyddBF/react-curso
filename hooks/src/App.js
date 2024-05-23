import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefa] = useState([
    'Tarefa 1',
    'Tarefa 2'
  ]);

  function addTarefa() {
    setTarefa([...tarefas, 'Ola mundo']);
  }

  return (
    <div>
      <ul>
        {
          tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))
        }
      </ul>

      <button onClick={ addTarefa }>Adicionar</button>
    </div>
  );
}

export default App;
