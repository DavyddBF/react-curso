import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }

    this.trocaEmail = this.trocaEmail.bind(this);
  }

  trocaEmail(evento) {
    const textoDigitado = evento.target.value;
    this.setState({ email: textoDigitado });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <br/>

        <label>Email:</label>
        <input type='email' name='email' value={this.state.email} onChange={ this.trocaEmail } />
        <br/>
        <br/>
        <label>Senha:</label>
        <input type='password' name='senha' value={this.state.senha} onChange={(evento) => {
          const textoDigitado = evento.target.value;
          this.setState({ senha: textoDigitado });
        }} />

        <div>
          <h3>Email digitado: { this.state.email }</h3>
          <h3>Senha digitada: { this.state.senha }</h3>
        </div>
      </div>
    );
  }
}

export default App;
