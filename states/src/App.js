import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Davyd',
      contador: 0
    }
	
	this.aumentar = this.aumentar.bind(this);
	this.diminuir = this.diminuir.bind(this);
  }
  
  aumentar() {
	  let state = this.state;
	  state.contador += 1;
	  this.setState(state);
  }
  
  diminuir() {
	  let state = this.state;
	  if(state.contador === 0) {
      alert('Erro: Valor abaixo de ZERO');
      return;
	  } 
    state.contador -= 1;
		this.setState(state);
  }
	  

  render() {
    return (
      <div>
        <h1>Contador</h1>
      
        <p>{ this.state.nome }</p>
        <h2>
          <button onClick={ this.diminuir }>-</button>
            { this.state.contador }
          <button onClick={ this.aumentar }>+</button>
        </h2>
      </div>
    );
  }
}

export default App;
