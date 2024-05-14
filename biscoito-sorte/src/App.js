import { Component } from 'react';
import './App.css'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            frase: 'Clique no botão acima para gerar uma nova frase!!'
        };
        this.frases = [
            'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito() {
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        this.setState({ frase: `" ${this.frases[numeroAleatorio]} "` }); 
    }


    render() {
        return (
            <div className='container'>
                <img className='img' src={require('./assets/biscoito.png')} />
                <Botao eventoOnClick={this.quebraBiscoito} nome="Abrir Biscoito" />
                <h3 className='texto'>{this.state.frase}</h3>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.eventoOnClick}>{this.props.nome}</button>
            </>
        );
    }
}

export default App;