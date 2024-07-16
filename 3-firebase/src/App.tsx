import { useState, useEffect } from 'react';
import {  
    /*setDoc,*/ 
    doc, 
    addDoc, 
    collection, 
    /*getDoc,*/ 
    getDocs, 
    updateDoc, 
    deleteDoc, 
    onSnapshot
} from 'firebase/firestore';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from 'firebase/auth';
import { db, auth } from './firebase/firebaseConnection';
import './App.css';

function App(): JSX.Element {
    interface Users {
        id: string,
        user: string,
        idade: string
    }

    const [user, setUser] = useState<string>('');
    const [idade, setIdade] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [users, setUsers] = useState<Users[]>([]);

    const idadeFiltrada = users.filter((user) => Number(user.idade) > 20);

    useEffect(() => {
        async function carregaUser() {
            const unsub = onSnapshot(collection(db, 'user'), (snapshot) => {
                let listaUser: Users[] = [];

                snapshot.forEach((cadaUser) => {
                    listaUser.push({
                        id: cadaUser.id,
                        user: cadaUser.data().user,
                        idade: cadaUser.data().idade
                    });
                });
    
                setUsers(listaUser);
            });
        }

        carregaUser();
    }, []);

    async function adicionar(): Promise<void> {
        /*
        Código que adiciona infos no firebase porém com id estático

        await setDoc(doc(db, 'user', '3'), {
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
        */

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

    /*
    Busca um user especifico

    async function buscarUser(): Promise<void> {
        await getDoc(doc(db, 'user', '2'))
        .then((snapshot) => {
            setUser(snapshot.data()?.user ?? 'Erro ao buscar dado');
            setIdade(snapshot.data()?.idade ?? 'Erro ao buscar dado');
        })
        .catch(() => {
            console.log('Algo deu errado!!')
        });
    }
    */

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
            console.log('Deletado!!')
        })
    }

    async function novoUsuario(): Promise<void> {
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            console.log('Cadastrado com sucesso!!!');
            setEmail('');
            setSenha('');
        })
        .catch((erro) => {
            if(erro.code == 'auth/weak-password'){
                alert('Senha muito fraca!!');
            } else if (erro.code == 'auth/email-already-in-use') {
                alert('Email já existe!!');
            }
        });
    }

    async function loginUsuario(): Promise<void> {
        await signInWithEmailAndPassword(auth, email, senha)
        .then((value) => {
            console.log('Logado com sucesso!!');
            console.log(value);
            setEmail('');
            setSenha('');
        })
        .catch(() => {
            console.log('Não foi possível fazer o login!!')
        })
    }

    return (
        <div>
            <h1>Firebase + React</h1>

            <div className='container'>
                <h2>Cadastro Email e Senha</h2>
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder='Insira seu email'
                    value={ email }
                    onChange={ (evento) => setEmail(evento.target.value) }
                />

                <label>Senha:</label>
                <input 
                    type="password" 
                    placeholder='Insira sua senha'
                    value={ senha }
                    onChange={ (evento) => setSenha(evento.target.value) }
                />
                <br/>
                <button onClick={ novoUsuario }>Cadastrar</button>
                <button onClick={ loginUsuario }>Login</button>
            </div>

                <br/><br/>
                <hr/>

            <div className='container'>
                <h2>Cadastro User e Idade</h2>
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