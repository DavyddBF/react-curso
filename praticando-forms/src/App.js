import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(evento) {
    evento.preventDefault();
    const { nome, email, senha } = this.state;

    if(nome !== '' && email !== '' && senha !== '') {
      alert(`Nome: ${nome} \n Email: ${email} \n Senha: ${senha}`);
    } else {
      this.setState({ error: 'OPS!!! Faltou preencher informações' })
    }

  }

  render() {
    return (
      <div className='principal'>
        <h1>• Cadastro de Usuário •</h1>
        <br/><br/>

        { this.state.error && <p className='erro'>{this.state.error}</p> }
        <form onSubmit={ this.cadastrar }>
          <div className='form__div'>
            <label>Nome:</label>
            <input type='text' value={this.state.nome} onChange={ (evento) => this.setState({ nome: evento.target.value }) }/>
          </div>
          
          <div className='form__div'>
            <label>Email:</label>
            <input type='text' value={this.state.email} onChange={ (evento) => this.setState({ email: evento.target.value }) }/> 
          </div>
          
          <div className='form__div'>
            <label>Senha:</label>
            <input type='text' value={this.state.senha} onChange={ (evento) => this.setState({ senha: evento.target.value }) }/> 
          </div>
          
          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;