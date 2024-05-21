import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='container'>
        <img className='img' src={ require('./assets/cronometro.png') } />
        <a className='timer'>0.0</a>
        <div className='area-btn'>
          <Btn title='Vai'/>
          <Btn title='Limpar' />
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
        <a className='btn'>{this.props.title}</a>
      </>
    );
  }
}

export default App;