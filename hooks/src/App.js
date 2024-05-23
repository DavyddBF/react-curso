import { useState } from 'react';
import './App.css';

function App() {

  const [tarefas, setTarefa] = useState([
    'Tarefa 1',
    'Tarefa 2'
  ]);

  const [input, setInput] = useState('');

  function addTarefa() {
    setTarefa([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <ul>
        {
          tarefas.map( tarefa => (
            <li key={ tarefa }>{ tarefa }</li>
          ))
        }
      </ul>

      <input type='text' value={ input }  onChange={ evento => setInput(evento.target.value) } />
      <button type='button' onClick={ addTarefa }>Adicionar</button>
    </div>
  );
}

export default App;
