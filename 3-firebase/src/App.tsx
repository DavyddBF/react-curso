import { useState } from 'react';
import {  /*setDoc,*/ doc, addDoc, collection, /*getDoc,*/ getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConnection';
import './App.css';

function App(): JSX.Element {
    interface Users {
        id: string,
        user: string,
        idade: string
    }

    const [user, setUser] = useState<string>('');
    const [idade, setIdade] = useState<string>('');
    const [users, setUsers] = useState<Users[]>([]);

    const idadeFiltrada = users.filter((user) => Number(user.idade) > 20);

    async function adicionar(): Promise<void> {
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

    // async function buscarUser(): Promise<void> {
    //     await getDoc(doc(db, 'user', '2'))
    //     .then((snapshot) => {
    //         setUser(snapshot.data()?.user ?? 'Erro ao buscar dado');
    //         setIdade(snapshot.data()?.idade ?? 'Erro ao buscar dado');
    //     })
    //     .catch(() => {
    //         console.log('Algo deu errado!!')
    //     });
    // }

    async function buscarTodosUsers(): Promise<void> {
        await getDocs(collection(db, 'user'))
        .then((snapshot) => {
            let lista: Users[] = [];

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

    async function atualizarUser(id: string): Promise<void> {
        await updateDoc(doc(db, 'user', id), {
            user: user,
            idade: idade
        })
        .then(() => {
            console.log('Deu tudo certim!');
            buscarTodosUsers();
            setUser('');
            setIdade('');
        })
        .catch((erro) => {
            console.log(erro);
        })
    }

    async function excluirUser(id: string) {
        await deleteDoc(doc(db, 'user', id))
        .then(() => {
            buscarTodosUsers();
        })
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
                /> <br/>

                <button className='btn' onClick={ adicionar }>Cadastrar</button>
                {/* <button onClick={ buscarUser }>Buscar user</button> */}
                <button className='btn' onClick={ buscarTodosUsers }>Buscar usuários</button> <br/>

                <div className='flex'>
                <ul>
                    {
                        users.map((cadaUser: Users) => {
                            return (
                                <li key={cadaUser.id}>
                                    <strong>ID: { cadaUser.id }</strong> <br/>
                                    <span>User: { cadaUser.user }</span> <br/>
                                    <span>Idade: { cadaUser.idade }</span> <br/>
                                    <button onClick={ () => excluirUser(cadaUser.id) }>Excluir</button>
                                    <button onClick={ () => atualizarUser(cadaUser.id) }>Editar</button> <br/><br/>
                                </li>
                            );
                        })
                    }
                </ul>
                <ul>
                    
                    {
                        idadeFiltrada.map((maioresVinte) => {
                            return (
                                <li key={maioresVinte.id}>
                                    <strong>ID: { maioresVinte.id }</strong> <br/>
                                    <span>User: { maioresVinte.user }</span> <br/>
                                    <span>Idade: { maioresVinte.idade }</span> <br/> <br/>
                                </li>
                            );
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
    );
}

export default App;