import { useState } from 'react';
import {  /*setDoc,*/ doc, addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConnection';
import './App.css';

function App(): JSX.Element {
    const [user, setUser] = useState('');
    const [idade, setIdade] = useState('');

    const [users, setUsers] = useState<any[]>([]);

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

    async function buscarUser() {
        await getDoc(doc(db, 'user', '2'))
        .then((snapshot) => {
            setUser(snapshot.data()?.user ?? 'Erro ao buscar dado');
            setIdade(snapshot.data()?.idade ?? 'Erro ao buscar dado');
        })
        .catch(() => {
            console.log('Algo deu errado!!')
        });
    }

    async function buscarTodosUsers() {
        await getDocs(collection(db, 'user'))
        .then((snapshot) => {
            let lista: any[] = [];

            snapshot.forEach((cadaUser) => {
                lista.push({
                    id: cadaUser.id,
                    user: cadaUser.data().user,
                    idade: cadaUser.data().idade
                });
            });

            setUsers(lista);
        })
        .catch(() => {
            console.log('Houve um erro ao buscar todos os usuários');
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
                <button onClick={ buscarUser }>Buscar user</button>
                <button onClick={ buscarTodosUsers }>Buscar todos users</button>

                <ul>
                    {
                        users.map((cadaUser) => {
                            return (
                                <li key={cadaUser.id}>
                                    <span>User: { cadaUser.user }</span> <br/>
                                    <span>Idade: { cadaUser.idade }</span> <br/><br/>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;