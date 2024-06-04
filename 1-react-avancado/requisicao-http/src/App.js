import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect( () => {
    function carregaApi() {
      const api = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      fetch(api).then( resp => resp.json()).then( respJSON => {
        console.log(respJSON);
        setNutri(respJSON);
      });
    }

    
    carregaApi();
  }, []);


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map( item => {
        return (
          <article className='post' key={ item.id }>
            <strong className='titulo'>{ item.titulo }</strong>
            <img className='capa' src={ item.capa } alt={ item.titulo } />
            <p className='subtitulo'>{ item.subtitulo }</p>
            <a className='btn'>Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
