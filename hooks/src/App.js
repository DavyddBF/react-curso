import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [tarefas, setTarefa] = useState([
    'Lavar louça',
    'Limpar casa'
  ]);

  const [input, setInput] = useState('');

  useEffect( () => {

  }, [ tarefas ]);

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
