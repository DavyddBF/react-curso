import { Component } from 'react';

class Membro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar(nomeUser) {
        this.setState({ nome: nomeUser});
        // Não consegui estudar hoje kkkkkk
    }

    render() {
        return (
            <div>
                <h1>Bem-vindo(a) {this.state.nome}</h1>
                <button onClick={() => this.entrar('Davyd')}>Entrar Sistema</button>
                <button onClick={() => this.setState({ nome: '' })}>Sair</button>
            </div>
        );
    }
}

export default Membro;