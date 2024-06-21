import { Link } from "react-router-dom";
import './error.css';

function Error(): JSX.Element {
    return (
        <div className="erro">
            <div>
                <h1>404</h1>
                <h2>Página não encontrada!!</h2>
                
                <h3>Segue os seguintes links encontrados:</h3>
                <Link to='/'>Voltar para a Home</Link>
            </div>
        </div>
    );
}

export default Error;