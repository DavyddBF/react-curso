import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: 'Davyd', curtida: 13, comentario: 15 },
        { id: 2, username: 'Rodrigo', curtida: 27, comentario: 16 },
        { id: 3, username: 'Pedro', curtida: 15, comentario: 7 }
      ]
    }
  }

  render() {
    return (
      <div>
        { // teste
          this.state.feed.map(item => {
            return (
              <div key={item.id}>
                <h3>{ item.username }</h3>
                <a>{item.curtida} curtidas / {item.comentario} comentários</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;