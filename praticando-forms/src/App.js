import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Olá mundo!!"
    }
  }

  render() {
    return (
      <div>
        <h1>{ this.state.titulo }</h1>
      </div>
    );
  }
}

export default App;