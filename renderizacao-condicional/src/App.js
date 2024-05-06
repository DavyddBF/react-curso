import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1
    };
  }

  render() {
    return (
      <div>
        {
          this.state.status === 1 &&
          <h1>Bem vindo ao sistema!!</h1>
        }
        <br/>
        <h1>Olá mundo</h1>
      </div>
    );
  }
}

export default App;