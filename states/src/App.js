import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Davyd'
    }
  }

  render() {
    return (
      <div>
        <p>Olá mundo, { this.state.nome }</p>
      </div>
    );
  }
}

export default App;
