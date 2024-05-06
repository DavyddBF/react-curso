import { Component } from 'react';
import './App.css'

import Membro from './components/Membro';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Membro nome="Visitante" />
            </div>
        );
    }
}

export default App;