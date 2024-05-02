import './App.css';

const BemVindo = (props) => {
    return (
        <>
        <h2>Olá { props.nome }</h2>
        <p>Você tem { props.idade } anos, certo?</p>
        </>
    );
}
  
function App() {
    return (
        <div>
        <h1>Olá mundo!!</h1>
        <p>Primeiro codigo com React!</p>

        <div>
            <h1>Mensagem de Bem-Vindo</h1>
            <BemVindo nome="Davyd" idade="18" />
        </div>
        </div>
    );
}
  
export default App;