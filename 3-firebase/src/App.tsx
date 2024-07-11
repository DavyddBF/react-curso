import { db } from './firebase/firebaseConnection';
import './App.css';

function App(): JSX.Element {
    function adicionar() {
        alert('Olá mundo')
    }

    return (
        <div>
            <h1>Firebase + React</h1>

            <div className='container'>
                <label>Titulo:</label>
                <input type='text' placeholder='Digite o titulo' />

                <label>Autor:</label>
                <input type="text" placeholder='Autor do post' />

                <button onClick={ adicionar }>Cadastrar</button>
            </div>
        </div>
    );
}

export default App;