import { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {

  const [tarefas, setTarefa] = useState(['Java', 'Python']);

  const [input, setInput] = useState('');

  useEffect( () => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefas) setTarefa(JSON.parse(tarefasStorage));
  }, []);

  useEffect( () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [ tarefas ]);

  const totalTarefas = useMemo( () => tarefas.length, [ tarefas ])

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
      <br/>

      <strong>Você tem {totalTarefas} tarefas!!</strong>
      <br/> 

      <input type='text' value={ input }  onChange={ evento => setInput(evento.target.value) } />
      <button type='button' onClick={ addTarefa }>Adicionar</button>
    </div>
  );
}

export default App;
