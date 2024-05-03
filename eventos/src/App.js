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
                <Membro nome="Visitante" />
            </div>
        );
    }
}

export default App;