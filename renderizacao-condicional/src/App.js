import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({ status: true });
  }

  sair() {
    this.setState({ status: false });
  }

  render() {
    return (
      <div>
        { //Utilizando operador ternário
          this.state.status ? // se sim...
          <div>
            <h1>Bem vindo usuário!!</h1>
            <button onClick={ this.sair }>Sair do Sistema</button>
          </div>
          : //se não...
          <div>
            <h1>Bem vindo visitante!! Faça Login!!</h1>
            <button onClick={ this.entrar }>Entrar no Sistema</button>
          </div> 
        }
      </div>
    );
  }
}

export default App;