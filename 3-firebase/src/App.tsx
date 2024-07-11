import { useState } from 'react';
import { /*doc, setDoc,*/ addDoc, collection } from 'firebase/firestore';
import { db } from './firebase/firebaseConnection';
import './App.css';

function App(): JSX.Element {
    const [user, setUser] = useState('');
    const [idade, setIdade] = useState('');

    async function adicionar() {
        // Código que adiciona infos no firebase porém com id estático

        // await setDoc(doc(db, 'user', '3'), {
        //     user: user,
        //     idade: idade
        // })
        // .then(() => {
        //     console.log('Deu tudo certo');
        //     setUser('');
        //     setIdade('');
        // })
        // .catch((erro) => {
        //     console.log('Aconteceu um erro ' + erro);
        // });

        await addDoc(collection(db, 'user'), {
            user: user,
            idade: idade
        })
        .then(() => {
            console.log('Deu tudo certo');
            setUser('');
            setIdade('');
        })
        .catch((erro) => {
            console.log('Aconteceu um erro ' + erro);
        });
    }

    return (
        <div>
            <h1>Firebase + React</h1>

            <div className='container'>
                <label>User:</label>
                <input 
                    type='text' 
                    placeholder='Digite o seu nome/user'
                    value={ user }
                    onChange={ (evento) => setUser(evento.target.value) }
                />

                <label>Idade:</label>
                <input 
                    type="text" 
                    placeholder='Digite sua idade'
                    value={ idade }
                    onChange={ (evento) => setIdade(evento.target.value) }
                />

                <button onClick={ adicionar }>Cadastrar</button>
            </div>
        </div>
    );
}

export default App;