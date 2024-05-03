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
                <h1>Olá mundo</h1>
                <p>Eu sou <Membro /></p>
            </div>
        );
    }
}

export default App;