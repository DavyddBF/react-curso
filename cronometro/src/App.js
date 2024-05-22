import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: 0,
      btnTitle: ['Vai', 'Limpar']
    };

    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    let state = this.state;

    if(this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.btnTitle = ['Vai', 'Limpar'];
    } else {
      this.timer = setInterval(() => {
        state.tempo += 0.1;
        this.setState(state);
      }, 100)

      this.state.btnTitle = ['Pausar', 'Limpar'];
    }

    this.setState(state);
  }

  limpar() {
    if(this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    
    state.tempo = 0
    state.btnTitle = ['Vai', 'Limpar'];
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img className='img' src={ require('./assets/cronometro.png') } />
        <a className='timer'>{ this.state.tempo.toFixed(1) }</a>
        <div className='area-btn'>
          <Btn click={ this.iniciar } title={this.state.btnTitle[0]} />
          <Btn click={ this.limpar } title={this.state.btnTitle[1]} />
        </div>
      </div>
    );
  }
}

class Btn extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <a className='btn' onClick={ this.props.click }>{ this.props.title }</a>
      </>
    );
  }
}

export default App;