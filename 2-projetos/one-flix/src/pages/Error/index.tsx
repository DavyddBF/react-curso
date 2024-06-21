import { Link } from "react-router-dom";

function Error(): JSX.Element {
    return (
        <div className="container">
            <h1>Página não encontrada!!</h1>
            <br/>
            <br/>
            <h3>Segue os seguintes links encontrados:</h3>
            <br/>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/filme'>Detalhes Filme</Link>
                </li>
            </ul>
        </div>
    );
}

export default Error;