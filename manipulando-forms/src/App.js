import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      genero: 'outro'
    }

    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaGenero = this.trocaGenero.bind(this);
  }

  trocaEmail(evento) {
    const textoDigitado = evento.target.value;
    this.setState({ email: textoDigitado });
  }

  trocaGenero(evento) {
    const generoSelecionado = evento.target.value;
    this.setState({ genero: generoSelecionado });
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
        <br/>
        <br/>
        <label>Gênero</label>
        <select name='genero' value={this.state.genero} onChange={ this.trocaGenero }>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
          <option value='outro'>Outro</option>
        </select>

        <div>
          <h3>Email digitado: { this.state.email }</h3>
          <h3>Senha digitada: { this.state.senha }</h3>
          <h3>Gênero selecionado: { this.state.genero.charAt(0).toUpperCase() + this.state.genero.slice(1) }</h3>
        </div>
      </div>
    );
  }
}

export default App;
