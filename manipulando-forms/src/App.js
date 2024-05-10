import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: 'email@email',
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
          
        </div>
      </div>
    );
  }
}

export default App;
