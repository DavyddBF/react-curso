import { Component } from 'react';
import './App.css'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.frases = [
            'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];
    }


    render() {
        return (
            <div className='container'>
                <img className='img' src={require('./assets/biscoito.png')} />
                <Botao/>
                <h3 className='texto'>Frase</h3>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <>
                <button>Abrir Biscoito</button>
            </>
        );
    }
}

export default App;