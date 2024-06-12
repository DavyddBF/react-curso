import { Link } from "react-router-dom";

function Contato(): JSX.Element {
    return (
        <div className='container'>
            <h1>Pagina de Contato</h1><br/>
            <p>Numero da empresa (dd) x xxxx-xxxx</p>
            <br/>
            <br/>
            
            <Link to='/'>Home</Link>
            <Link to='/sonbre'>Sobre</Link>
        </div>
    );
}

export default Contato;