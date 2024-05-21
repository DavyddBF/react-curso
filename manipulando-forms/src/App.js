import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: '',
        email: '',
        senha: '',
        genero: 'outro'
      }
    }

    this.dadosForm = this.dadosForm.bind(this);
  }

  dadosForm(evento) {
    let form = this.state.form;
    const posPorNome = evento.target.name;
    const valorInput =  evento.target.value;

    form[posPorNome] = valorInput;
    this.setState({ form: form })
  }

  render() {
    return (
      <div>
        <h1>Faça seu Login</h1>
        <br/>

        <label>Nome:</label>
        <input type='text' name='nome' value={this.state.form.nome} onChange={ this.dadosForm } />
        <br/><br/>

        <label>Email:</label>
        <input type='email' name='email' value={this.state.form.email} onChange={ this.dadosForm } />
        <br/><br/>

        <label>Senha:</label>
        <input type='password' name='senha' value={this.state.form.senha} onChange={ this.dadosForm } />
        <br/><br/>

        <label>Gênero</label>
        <select name='genero' value={this.state.form.genero} onChange={ this.dadosForm }>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
          <option value='outro'>Outro</option>
        </select>

        <div>
          <h3>Email digitado: { this.state.form.email }</h3>
          <h3>Senha digitada: { this.state.form.senha }</h3>
          <h3>Gênero selecionado: { this.state.form.genero.charAt(0).toUpperCase() + this.state.form.genero.slice(1) }</h3>
        </div>
      </div>
    );
  }
}

export default App;


function Input() {
  return (
    <div>
      
    </div>
  );
}