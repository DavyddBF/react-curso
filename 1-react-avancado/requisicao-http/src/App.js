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
    </div>
  );
}

export default App;
